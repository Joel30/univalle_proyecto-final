import { Component } from '@angular/core';
import { Card } from "../../../shared/card/card";

@Component({
  selector: 'app-muebles',
  imports: [Card],
  templateUrl: './muebles.html',
})
export class Muebles {
  muebles = [
    { nombre: 'Mueble 1', precio: 500, imagen: 'assets/muebles-1.jpg' },
    { nombre: 'Mueble 2', precio: 800, imagen: 'assets/muebles-2.jpg' },
    { nombre: 'Mueble 3', precio: 1200, imagen: 'assets/muebles-3.jpg' },
    { nombre: 'Mueble 4', precio: 300, imagen: 'assets/muebles-4.jpg' },
    { nombre: 'Mueble 5', precio: 450, imagen: 'assets/muebles-5.jpg' },
    { nombre: 'Mueble 6', precio: 700, imagen: 'assets/muebles-6.jpg' }
  ];
}
