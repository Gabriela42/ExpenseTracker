import { Injectable } from '@angular/core';
import { Categorias } from 'src/app/Categorias';
import { Registro } from '../../Registro';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class RegistrosService {
  private api_url = 'http://localhost:5000/registros';

  constructor(private http: HttpClient) {}
  get_items(): Observable<Registro[]> {
    return this.http.get<Registro[]>(this.api_url);
  }

  delete_item(item: Registro): Observable<Registro> {
    const url = `${this.api_url}/${item.id}`;
    return this.http.delete<Registro>(url);
  }

  update_item(item: Registro): Observable<Registro> {
    const url = `${this.api_url}/${item.id}`;
    return this.http.put<Registro>(url, item, httpOptions);
  }

  add_item(item: Registro): Observable<Registro> {
    return this.http.post<Registro>(this.api_url, item, httpOptions);
  }
}
