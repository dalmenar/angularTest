import { Component, OnInit } from "@angular/core";
import { FormService } from "../form.service";
import { Info } from "../form/form.component";

@Component({
  selector: "fh-list",
  template: `
  
<div class="container">
  <table *ngIf="elementos.length >0;else emptyList" class="table table-striped ">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nombre</th>
      <th scope="col">Accion</th>
    </tr>
  </thead>
  <tbody>
    <tr *ngFor="let element of elementos">
      <th scope="row">{{element.id}}</th>
      <td>{{element.email}}</td>
      <td>
      <button (click)="remove(element)" type="button" class="btn btn-primary btn-sm">
          <span class="glyphicon glyphicon-remove"></span> Remove 
        </button>
      </td> 
      
      
    </tr>
    
  </tbody>
</table>
</div>

<ng-template #emptyList>
  <h3>No existen elementos amigo</h3>
</ng-template>
  `,
  styles: []
})
export class ListComponent implements OnInit {
  elementos = new Array<Info>();
 

  constructor(private formService: FormService) {}

  ngOnInit() {
    this.refresh();
  }

  removeById(i: string) {
    this.formService.removeById(i);
  }
  remove(item: Info) {
    this.formService.remove(item);

  }

  refresh() {
    debugger;
    this.elementos = this.formService.get();
  
  }
}
