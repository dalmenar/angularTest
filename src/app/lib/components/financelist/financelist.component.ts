import { Component, OnInit } from "@angular/core";
import { FinanceService, InfoFinance } from "../finance.service";
import { Observable } from "rxjs/Observable";

@Component({
  selector: "fh-financelist",
  template: `
   
  
<div class="container table-responsive">

<div  style="padding-bottom:10px">
  <div class="input-group mb-3">
    <div class="input-group-prepend">
      <span class="input-group-text" id="basic-addon1">Search</span>
    </div>
    <input (keydown)="filterKey()" name="filter" class="form-control" [(ngModel)]="filterItem" />
  </div>
</div>

<table *ngIf="elementos.length > 0 ; else emptyList" class="table table-striped table-hover">
<thead>
  <tr>
    <th class="w-15" scope="col">#</th>
    <th class="w-35" scope="col">Symbol</th>
    <th class="w-50" scope="col">Name</th>
  </tr>
</thead>
<tbody>
  <tr *ngFor="let element of elementos ">
    <th scope="row"></th>
    <td>{{element.symbol}}</td>
    <td>{{element.name}}</td>
    <td>
    
    
  </tr>
  
</tbody>
</table>

<nav aria-label="Page navigation example">
  <ul class="pagination">
    <li (click)="filter(0)" class="page-item"><a class="page-link" >Previous</a></li>
    <li (click)="filter(1)" class="page-item"><a class="page-link">Next</a></li>
  </ul>
</nav>

</div>


<ng-template #emptyList>
  <h3>Cargando little friend...</h3>
</ng-template>
  `,
  styles: []
})
export class FinancelistComponent implements OnInit {
  elementos: InfoFinance[] = new Array<InfoFinance>();
  elementosServidor: InfoFinance[] = new Array<InfoFinance>();
  constructor(private financeService: FinanceService) {}

  currentPage = 0;
  maxPage = 10;
  filterItem: string = "";

  ngOnInit() {
    
    this.financeService.getSymbols$().subscribe(this.refresh.bind(this));
  }

  refresh(list: InfoFinance[]) {
    this.elementosServidor = list;

    this.filter(-1);
  }

  filter(side: number) {
    if (side == 0) {
      if (this.currentPage >= 0) {
        this.currentPage--;
      }
    } else if (side == 1) {
      this.currentPage++;
    }

    this.elementos = this.elementosServidor.slice(
      (this.currentPage + 1) * this.maxPage,
      (this.currentPage + 1) * this.maxPage + this.maxPage
    );
  }

  filterKey() {
    if (this.filterItem == "") this.filter(-1);
    else
      this.elementos = this.elementosServidor.filter(
        a => a.symbol.indexOf(this.filterItem) > 0
      );
  }
}
