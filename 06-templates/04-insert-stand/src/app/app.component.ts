import { ApplicationRef, Component, Injector, TemplateRef, ViewChild, ViewContainerRef, inject } from '@angular/core';
import { from, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'insert-stand';

  @ViewChild('viewContainer', {static: true, read: ViewContainerRef})
  private container!: ViewContainerRef;

  // private readonly applicationRef = inject(ApplicationRef);

  readonly component$ = from(import('./undeclarated/undeclarated.component')).pipe(
    map(m => m.UndeclaratedComponent),
  )

  async onClickComponent() {
    const {UndeclaratedComponent} = await import('./undeclarated/undeclarated.component');

    // const view = this.container.createComponent(UndeclaratedComponent);

    // this.container.detach(this.container.length - 1);

    // this.applicationRef.attachView(view.hostView);

    this.container.createComponent(UndeclaratedComponent, {injector: Injector.create({
      providers: [
        {
          provide: 'name',
          useValue: 'Egor',
        }
      ]
    })})
  }

  onClickTemplate(template: TemplateRef<unknown>) {
    this.container.createEmbeddedView(template, {
      name: 'Egor',
      $implicit: 'Sidorov',
    });
  }

  onClickClear() {
    this.container.clear();
  }

}
