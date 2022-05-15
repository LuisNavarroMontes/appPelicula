/* eslint-disable prefer-const */
import { Component, OnInit } from '@angular/core';
import { PeliService } from 'src/app/services/peli.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {

  informacion: object= null;
  constructor(private peliService: PeliService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.peliService.obtenerInfo(id).subscribe(resultado => this.informacion = resultado);
  }

}
