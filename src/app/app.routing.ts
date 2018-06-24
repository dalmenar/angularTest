import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./views/home/home.component";
import { NotFoundComponent } from "./views/not-found/not-found.component";
import { FormComponent } from "./lib/components/form/form.component";
import { ListComponent } from "./lib/components/list/list.component";
import { FinancelistComponent } from "./lib/components/financelist/financelist.component";
import { FormBuilderComponent } from "./lib/components/form-builder/form-builder.component";
import { GridsterComponent } from "./lib/components/gridster/gridster.component";
import { ChartComponent } from "./lib/components/chart/chart.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    
  },
  {
    path: "finance",
    component: FinancelistComponent,
    
  },
  {
    path: "list",
    component: ListComponent,
    
  },
  {
    path: "form",
    component: FormComponent,
    
  },
  {
    path: "formBuilder",
    component: FormBuilderComponent,
    
  },
  {
    path: "gridster",
    component: GridsterComponent,
    
  },
  {
    path: "chart",
    component: ChartComponent,
    
  },

  {
    path: "404",
    component: NotFoundComponent,
    
  },
  {
    path: "**",
    redirectTo: "/404"
    
  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
