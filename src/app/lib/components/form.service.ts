import { Injectable } from "@angular/core";
import { Info } from "./form/form.component";

@Injectable()
export class FormService {
  private list: Array<Info> = new Array<Info>();

  constructor() {}

  public add(item: Info) {
    var copy = item.clone();
    this.list.push(copy);
  }

  public removeById(itemId: string) {
    this.list = this.list.filter(a => a.id != itemId);
  }
  public remove(item: Info) {
    var index = this.list.indexOf(item, 0);
    if (index > -1) {
      this.list.splice(index, 1);
    }
  }

  public get(): Array<Info> {
    debugger;
    return this.list;
  }
}
