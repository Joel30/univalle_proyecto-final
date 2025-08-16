import { Component } from '@angular/core';
import { Card } from "../../../shared/card/card";

@Component({
  selector: 'app-electronica-tecnologia',
  imports: [Card],
  templateUrl: './electronica-tecnologia.html',
})
export class ElectronicaTecnologia {
  productos = [
    { nombre: 'Producto 1', precio: 100, imagen: 'assets/tech-1.jpg' },
    { nombre: 'Producto 2', precio: 200, imagen: 'assets/tech-2.webp' },
    { nombre: 'Producto 3', precio: 300, imagen: 'assets/tech-3.jpg' },
    { nombre: 'Producto 4', precio: 150, imagen: 'assets/tech-4.jpg' },
    { nombre: 'Producto 5', precio: 250, imagen: 'assets/tech-5.jpg' },
    { nombre: 'Producto 6', precio: 350, imagen: 'assets/tech-6.webp' }
  ];
}
