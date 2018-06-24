import { Component, OnInit } from "@angular/core";

@Component({
  selector: "fh-nav",
  template: `
  <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
      <h5 class="my-0 mr-md-auto font-weight-normal">Testing dashboard finance</h5>
      <nav class="my-2 my-md-0 mr-md-3">
      <a routerLink="/form" class="btn btn-outline-primary">Form</a>
      <a routerLink="/formBuilder" class="btn btn-outline-primary">FormBuilder</a>
      <a routerLink="/list" class="btn btn-outline-primary">List</a>
      <a routerLink="/finance" class="btn btn-outline-primary">Finance</a>
      <a routerLink="/gridster" class="btn btn-outline-primary">Gridster</a>
      <a routerLink="/chart" class="btn btn-outline-primary">Chart</a>
      
      </nav>
      
    </div>
  `,
  styles: []
})
export class NavComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
}
