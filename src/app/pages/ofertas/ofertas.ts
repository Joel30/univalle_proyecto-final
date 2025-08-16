import { Component } from '@angular/core';
import { Card } from "../../shared/card/card";

@Component({
  selector: 'app-ofertas',
  imports: [Card],
  templateUrl: './ofertas.html',
})
export class Ofertas {
  ofertas = [
    { nombre: 'Producto 1', precio: 50, imagen: 'assets/muebles-1.webp', descuento: 50 },
    { nombre: 'Producto 2', precio: 75, imagen: 'assets/tech-5.webp', descuento: 65 },
    { nombre: 'Producto 3', precio: 100, imagen: 'assets/tech-3.webp', descuento: 50 },
    { nombre: 'Producto 4', precio: 30, imagen: 'assets/vestimenta-4.webp', descuento: 80 },
    { nombre: 'Producto 5', precio: 45, imagen: 'assets/muebles-5.webp', descuento: 75 },
    { nombre: 'Producto 6', precio: 60, imagen: 'assets/vestimenta-6.webp', descuento: 32 }
  ];
}
