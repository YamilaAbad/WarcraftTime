import { Component, Input, OnInit } from '@angular/core';
import { Discuciones } from '../foro/Discuciones';

@Component({
  selector: 'app-input-votar',
  templateUrl: './input-votar.component.html',
  styleUrls: ['./input-votar.component.scss']
})
export class InputVotarComponent implements OnInit {

  constructor() { }

  @Input()
  discucion!: Discuciones;

  ngOnInit(): void {
  }

  restarVoto(discucion: Discuciones): void{
    discucion.votos--;
  }

  sumarVoto(discucion: Discuciones): void{
    discucion.votos++;
  }


}
