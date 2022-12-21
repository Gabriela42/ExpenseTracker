import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import Budget from '../Budget';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class PresupuestoService {
  private api_url = 'http://localhost:5000/presupuestos';

  constructor(private http: HttpClient) {}

  get_items(): Observable<Budget[]> {
    debugger;
    return this.http.get<Budget[]>(this.api_url);
  }

  delete_item(item: Budget): Observable<Budget> {
    const url = `${this.api_url}/${item.id}`;
    return this.http.delete<Budget>(url);
  }

  update_item(item: Budget): Observable<Budget> {
    const url = `${this.api_url}/${item.id}`;
    return this.http.put<Budget>(url, item, httpOptions);
  }

  add_item(item: Budget): Observable<Budget> {
    return this.http.post<Budget>(this.api_url, item, httpOptions);
  }

}
