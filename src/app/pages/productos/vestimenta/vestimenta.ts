import { Component } from '@angular/core';
import { Card } from '../../../shared/card/card';

@Component({
  selector: 'app-vestimenta',
  imports: [Card],
  templateUrl: './vestimenta.html',
})
export class Vestimenta {
  productos = [
    { nombre: 'Atuendo 1', precio: 200, imagen: 'assets/vestimenta-1.webp' },
    { nombre: 'Atuendo 2', precio: 350, imagen: 'assets/vestimenta-2.jpg' },
    { nombre: 'Atuendo 3', precio: 500, imagen: 'assets/vestimenta-3.jpg' },
    { nombre: 'Atuendo 4', precio: 150, imagen: 'assets/vestimenta-4.jpg' },
    { nombre: 'Atuendo 5', precio: 150, imagen: 'assets/vestimenta-5.jpg' },
    { nombre: 'Atuendo 6', precio: 95, imagen: 'assets/vestimenta-6.jpg' }
  ];
}
