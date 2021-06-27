import { Component, OnInit } from '@angular/core';
import { Noticias } from './Noticias';

@Component({
  selector: 'app-noticias-list',
  templateUrl: './noticias-list.component.html',
  styleUrls: ['./noticias-list.component.scss']
})
export class NoticiasListComponent implements OnInit {
  encabezado={
    titulo:"assets/img/noticias.png",
  }
  noticias: Noticias[] =[ 
    {
      titulo: 'El encuentro mas épico de todo wow',
      descripcion: 'El encuentro contra Sylvanas será uno de los más épicos de toda la historia - Entrevista a Blizzard',
      boton: 'ver noticia completa',
      imagen: 'assets/img/sylvanas.jpg',
      fecha: 'Fecha publicación: 25/6/2021',
      visitas: 2566,
      
    },
    {
      titulo:'9.1 A la vuelta de la esquina!',
      descripcion: 'Blizzard confirma fecha de salida del nuevo parche',
      boton: 'ver noticia completa',
      imagen: 'assets/img/cadenasdedominacion.jpg',
      fecha: 'Fecha publicación: 22/6/2021',
      visitas: 8456,
      
    },
    {
      titulo: 'Blizzard confirma el reinicio del Valor y la conquista',
      descripcion: 'Algunas partes del juego dejarán de estar disponibles y se incorporarán algunos objetos nuevos',
      boton: 'ver noticia completa',
      imagen: 'assets/img/valor.jpg',
      fecha: 'Fecha publicación: 21/6/2021',
      visitas: 3656,
      
    },
    {
      titulo: 'Parche 9.1 llega pronto!',
      descripcion:'Se filtra fecha de posible actualización del proximo parche, ¡ya vamos 200 dias sin actualización!',
      boton: 'ver noticia completa',
      imagen: 'assets/img/parche9_1.jpg',
      fecha: 'Fecha publicación: 18/6/2021',
      visitas: 1225,
      
    },
    {
      titulo: 'World of Warcraft ya no es el mmorpg mas jugado?',
      descripcion: 'La reciente salida de Final Fantasy XIV, logra destronar y dejar en segundo lugar a World of Warcraft por primera vez en la historia!',
      boton: 'ver noticia completa',
      imagen: 'assets/img/ff14_wow.jpg',
      fecha: 'Fecha publicación: 16/6/2021',
      visitas: 5521,
     
    },
    {
      titulo: 'Un paseo por Tazavesh, el Mercado Velado',
      descripcion: 'La nueva mega mazmorra de 8 jefes, llegará con el parche 9.1',
      boton: 'ver noticia completa',
      imagen: 'assets/img/tazavesh.jpg',
      fecha: 'Fecha publicación: 02/6/2021',
      visitas: 1225,
     
    },
];
  constructor() { }

  ngOnInit(): void {
  }

  vistas(noticia: Noticias): void{
    noticia.visitas++;
  }
}
