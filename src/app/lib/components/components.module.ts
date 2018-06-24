import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { FormService } from './form.service';
import { FinancelistComponent } from './financelist/financelist.component';
import { FinanceService } from './finance.service';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { GridsterModule } from 'angular-gridster2';
import { GridsterComponent } from './gridster/gridster.component';
import { GridsterRenderComponent } from './gridster-render/gridster-render.component';
import { ChartComponent } from './chart/chart.component';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    GridsterModule,
    ChartsModule
    
    
    
  ],
  declarations: [NavComponent, FooterComponent, FormComponent, ListComponent, FinancelistComponent, FormBuilderComponent, GridsterComponent, GridsterRenderComponent,ChartComponent ],
  exports: [NavComponent,FooterComponent],
  providers:[FormService,FinanceService]
})
export class ComponentsModule { }
