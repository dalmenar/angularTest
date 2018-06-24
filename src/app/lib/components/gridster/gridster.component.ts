import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {CompactType, GridsterConfig, GridsterItem, GridsterItemComponent, GridsterPush, GridType} from 'angular-gridster2';



@Component({
  selector: "fh-gridster",
  template: `
  
  <div style="width:1000px;height:800px" >
  <gridster [options]="options">
     <gridster-item [item]="item" *ngFor="let item of dashboard">
     <fh-gridster-render [model]="item"></fh-gridster-render>
  </gridster-item>
</gridster>
<div>
  `,
  styles: []
})
export class GridsterComponent implements OnInit {
  options: GridsterConfig;
  dashboard: Array<GridsterItem>;
  constructor() {}

  static itemChange(item, itemComponent) {
    console.info("itemChanged", item, itemComponent);
  }

  static itemResize(item, itemComponent) {
    console.info("itemResized", item, itemComponent);
  }

  ngOnInit() {
    this.options = {
      gridType: GridType.Fit,
      
      itemChangeCallback: this.itemChange,
      itemResizeCallback: this.itemResize,
      draggable:{enabled : true },
      pushItems: false,
      minRows: 2,
      resizable:{enabled:true},
      itemInitCallback: this.itemInit
    };
    
    this.dashboard = [
      { cols: 2, rows: 1, y: 0, x: 0,type:"chart", },
      { cols: 2, rows: 2, y: 0, x: 2,type:"chart2", },
      
    ];
    
  }
  itemInit(e)
  {
    
  }
  changedOptions() {
    this.options.api.optionsChanged();
  }

  removeItem(item) {
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }

  addItem() {
    //this.dashboard.push();
  }
  itemChange(e) {}
  itemResize(e) {}
}
