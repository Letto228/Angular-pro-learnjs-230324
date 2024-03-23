import { Component } from '@angular/core';
import { SwPush, SwUpdate, VersionReadyEvent } from '@angular/service-worker';
import { filter, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'service-worker';

  constructor(swUpdate: SwUpdate, swPush: SwPush) {
    swUpdate.versionUpdates
      .pipe(
        filter((event): event is VersionReadyEvent => event.type === 'VERSION_READY'),
      )
      .subscribe(() => {
        if (confirm('Есть новая версия приложения, загрузить?')) {
          document.location.reload();
        }
      });

    // timer(1000 * 60 * 60 * 2).subscribe(() => {
    // timer(40000).subscribe(() => {
    //   swUpdate.checkForUpdate().then(questionReload => {
    //     console.log(questionReload);

    //     if (questionReload && confirm('Есть новая версия приложения, загрузить?')) {
    //       document.location.reload();
    //     }
    //   });
    // })

    Notification.requestPermission().then(permisionResult => {
      if (permisionResult === 'granted') {
        console.log('Can show notification');
      }
    })

    swPush.messages.subscribe(message => {
      console.log(message);
    })

    const serverPublickKey = '';

    swPush.requestSubscription({serverPublicKey}).then(pushSubscription => {
      
    })
  }
}
