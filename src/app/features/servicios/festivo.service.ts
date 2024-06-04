import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FestivoService {
  private url: string;

  constructor(private http: HttpClient) {
    this.url = `${environment.urlBase}festivos/`;
  }

  public consultar(day: number, month: number, year: number): Observable<string> {
    const url = `${this.url}consultar/${day}/${month}/${year}`;
    console.log(`Realizando solicitud a la URL: ${url}`);
    return this.http.get<string>(url);
  }

  public obtenerFestivos(año: number): Observable<{ fecha: string, descripcion: string }[]> {
    const url = `${this.url}listar/${año}`;
    return this.http.get<{ fecha: string, descripcion: string }[]>(url);
  }
}
