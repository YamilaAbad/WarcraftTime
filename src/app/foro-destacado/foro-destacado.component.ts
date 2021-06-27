import { Component, OnInit } from '@angular/core';
import { Discuciones } from '../foro/Discuciones';


@Component({
  selector: 'app-foro-destacado',
  templateUrl: './foro-destacado.component.html',
  styleUrls: ['./foro-destacado.component.scss']
})
export class ForoDestacadoComponent implements OnInit {
  encabezado={
    titulo:"assets/img/destacados.png", 
  };
 
  
  constructor() { }


  ngOnInit(): void {
  }

}
