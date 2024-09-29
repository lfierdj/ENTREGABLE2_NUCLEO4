import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutoService {
  constructor(private http: HttpClient) { }
  private apiUrl = 'http://localhost:3000/autos';


  // Obtener lista de autos
  getAutos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Agregar un nuevo auto
  postAuto(persona: any): Observable<any> {
    return this.http.post(this.apiUrl, persona);
  }

  // Actualizar información de un auto
  putNosotros(persona:any):Observable <any>{
    return this.http.put(`${this.apiUrl}/${persona.id}`,persona)
  }

  // Eliminar un auto
  deleteAuto(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  getIDAuto(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
}
}
