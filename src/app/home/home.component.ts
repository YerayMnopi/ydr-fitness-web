import { Component, OnInit } from '@angular/core';
import { Highlight } from 'ydr-ng-common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
} )
export class HomeComponent implements OnInit {

  highlights: Highlight[] = [
    {
      iconName: 'calculator',
      heading: 'Know how much volume',
      text: 'Los expertos en las últimas versiones de angular son sumamente valorados en el mercado actual.'
    },
    {
      iconName: 'rocket',
      heading: 'Progress like never before',
      text: 'Angular no es un framework más; es una plataforma completa para los desarrolladores que llegó para quedarse.'
    },
    {
      iconName: 'chronometer',
      heading: 'Easy to use',
      text: 'Ofrece a tu empresa y a tus clientes aplicaciones con una eficiencia demoledora.'
    },
    {
      iconName: 'calendar',
      heading: 'Track and Schedule',
      text: 'Angular pone a tu disposición las herramientas necesarias para conseguir las interfaces que siempre soñaste.'
    },
    {
      iconName: 'checkmark',
      heading: 'Pasa todos los test',
      text: 'Si construyes tu web con angular obtendrás calidad en todos los dispositivos y navegadores.'
    },
    {
      iconName: 'pig',
      heading: 'Completamente gratis',
      text: 'Trabajar con angular no cuesta absolutamente nada.'
    },
  ];;

  constructor() { }

  ngOnInit(): void {

  }

}
