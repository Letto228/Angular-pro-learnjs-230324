import { Component, ElementRef, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { ZooComponent } from './zoo/zoo.component';
import { CatComponent } from './animals/cat/cat.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'contentchildren-by-service';

  // @ViewChild('catVar') private catComponent: CatComponent | undefined;
  // @ViewChild(CatComponent) private catComponent: CatComponent | undefined;
  // @ViewChild('name') private catComponent: string | undefined;
  // @ViewChild(TemplateRef) private catComponentTemplateRef: TemplateRef<unknown> | undefined;

  // @ViewChild(CatComponent, {read: ElementRef}) private catComponent: ElementRef | undefined;
  // @ViewChild(CatComponent, {read: ViewContainerRef}) private catComponentViewContainerRef: ViewContainerRef | undefined;

  // @ViewChild(CatComponent, {static: false}) private catComponent: CatComponent | undefined;
  @ViewChild(CatComponent, {static: true}) private catComponent: CatComponent | undefined;

  // private zooComponent: ZooComponent

  // say() {
  //   this.zooComponent.say();
  // }
}
