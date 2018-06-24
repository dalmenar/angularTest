import { Component } from "@angular/core";

@Component({
  selector: "fh-root",
  template: `
  <fh-nav></fh-nav>
  <div class="container" style="padding-top:20px">
    <router-outlet></router-outlet>
  </div>
  <fh-footer></fh-footer>  
  `,
  styles: []
})
export class AppComponent {
  title = "fh";
}
