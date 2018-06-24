import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "fh-form-builder",
  template: `
  <form [formGroup]="form">
    <label for="email">E-mail</label>
    <input name="email"
          formControlName="email"
          type="email" />
    <label for="name">Name</label>
    <input name="name"
          formControlName="name"
          type="text" />
  
    <label for="password">Password</label>
    <input name="password"
          formControlName="password"
          type="password" />  

    <div style="padding-top:10px">
      <button type="submit"
        [disabled]="form.invalid">Save</button>

      <button type="button"
        (click)="showme()">Showme puta</button>

        <button type="button"
        (click)="reset()">Reset</button>
        </div>
  </form>  


  `,
  styles: []
})
export class FormBuilderComponent implements OnInit {
  public form: FormGroup;

  constructor(private formB: FormBuilder) {}

  ngOnInit() {
    this.form = this.formB.group({
      email: "mytest@gmail.com",
      name: "my name",
      dateRegister: new Date().toISOString().substring(0, 10),
      password: ["", [Validators.required, Validators.minLength(5)]]
    });
  }

  showme() {
    var e = this.form.getRawValue();
    console.log(e);
    
  }
  reset() {
    this.form.reset();
  }
}
