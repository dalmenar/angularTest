import { Component, OnInit, Input, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { GridsterItem } from 'angular-gridster2';
import { FormBuilderComponent } from '../form-builder/form-builder.component';
import { FormComponent } from '../form/form.component';
import { FormService } from '../form.service';
import { ChartComponent } from '../chart/chart.component';

@Component({
  selector: 'fh-gridster-render',
  template: `
  <ng-template ></ng-template>
  `,
  styles: []
})
export class GridsterRenderComponent implements OnInit {
  @Input() model:GridsterItem;
  @Input() type:number;
  constructor(public viewContainerRef: ViewContainerRef,private componentFactoryResolver: ComponentFactoryResolver,private formService : FormService) { }

  ngOnInit() {
    var pepe = this.model;
    var compo = new FormComponent(this.formService);

    //Creamos el componente dinamico
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(ChartComponent);
    
    //Limpiamos
    this.viewContainerRef.clear();

    //Insertamos el componente dentro del container
    this.viewContainerRef.createComponent(componentFactory);

    //(<FormBuilderComponent>componentRef.instance).data = adItem.data;

  }

}
