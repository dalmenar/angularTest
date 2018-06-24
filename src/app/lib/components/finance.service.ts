import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FinanceService {
  private url = environment.apiFinance + "1.0/ref-data/symbols"
  constructor(private http: HttpClient) { }

  public getSymbols$() : Observable<InfoFinance[]>
  {
    return this.http.get<InfoFinance[]>(this.url);
  }

}

export class InfoFinance
{
  symbol:string;
  name:string;
  date:string;
}

