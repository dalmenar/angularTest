import { Component, OnInit } from '@angular/core';
import { FormService } from '../form.service';


@Component({
  selector: 'fh-form',
  template: `
  <div class="container">
  <div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input name="email" [(ngModel)]="model.email" type="text" class="form-control"  >
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Password</label>
      <input name="password" [(ngModel)]="model.password" type="text" class="form-control" placeholder="Password">
    </div>
  </div>
  <div class="form-group">
    <label for="inputAddress">Address</label>
    <input name="address" [(ngModel)]="model.address" type="text" class="form-control"  placeholder="1234 Main St">
  </div>
 
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">City</label>
      <input name="city" [(ngModel)]="model.city" type="text" class="form-control" >
    </div>
   
    <div class="form-group col-md-2">
      <label for="inputZip">Zip</label>
      <input name="zip" [(ngModel)]="model.zip" type="text" class="form-control" >
    </div>
  </div>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck">
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <button (click)="add()" class="btn btn-primary">Add</button>
</div>

<p>Resumen</p>
<p></p>
<p>Email : {{model.email}}</p>
<p>Password : {{model.password}}</p>
 </div>


 
  `,
  styles: []
})
export class FormComponent implements OnInit {
  
  model : Info = new Info();

  constructor(private formService : FormService)
  {

  }
  
  add(){
    debugger;
    this.formService.add(this.model);
  }

  ngOnInit() {
    this.model.email = "ee";
  }


}
export class Info
{
  id:string;
  email:string;
  password:string;
  address:string;
  city:string;
  zip:string;

  public clone()
  {
    const targetOperation = Object.assign({}, this);
    return targetOperation;
  }
}