/* eslint-disable no-trailing-spaces */
/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PeliService } from 'src/app/services/peli.service';
import { IPeliculas } from 'src/app/model/IPeliculas.interface';
@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.page.html',
  styleUrls: ['./peliculas.page.scss'],
})
export class PeliculasPage implements OnInit {
  resultados: Observable<IPeliculas>;
  busquedaTxtBox: string='';
  type: string='';
  constructor(private peliService: PeliService) { }

  ngOnInit() {
  }

  onTxtBusquedaChanged(e): void{
    this.type = 'movie';
    this.resultados = this.peliService.buscarPeliculasNombre(this.busquedaTxtBox, this.type);
  }
}
