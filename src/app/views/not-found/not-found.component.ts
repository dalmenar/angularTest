import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'fh-not-found',
  template: `
    
      <h1>Pagina no encontrada MAN!!! </h1>

      <p>Puedes volver al home y ya si eso buscas </p>

      <a routerLink="/">Go home</a>
    `,
  styles: []
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
