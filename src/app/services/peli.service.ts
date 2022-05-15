/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPeliculas } from '../model/IPeliculas.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeliService {
  private url: string='';
  private codigoPagina: string = 'c6d49cb3';
  constructor(private http: HttpClient) { }

  buscarPeliculasNombre(title: string, type: string){
    this.url = `https://www.omdbapi.com/?s=${encodeURI(title)}&type=${type}&apikey=${this.codigoPagina}`;
    return this.http.get<IPeliculas>(this.url).pipe(map(results => results['Search']));
  }

  obtenerInfo(id: string) {
    return this.http.get<IPeliculas>(`https://www.omdbapi.com/?i=${id}&plot=full&apikey=${this.codigoPagina}`);
  }
}
