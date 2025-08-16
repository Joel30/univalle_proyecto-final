import { Component } from '@angular/core';
import { Card } from "../../../shared/card/card";

@Component({
  selector: 'app-vehiculos',
  imports: [Card],
  templateUrl: './vehiculos.html',
})
export class Vehiculos {
  vehiculos = [
    { nombre: 'Vehículo 1', precio: 100000, imagen: 'assets/vehiculo-1.jpg' },
    { nombre: 'Vehículo 2', precio: 35000, imagen: 'assets/vehiculo-2.jpg' },
    { nombre: 'Vehículo 3', precio: 50000, imagen: 'assets/vehiculo-3.jpg' },
    { nombre: 'Vehículo 4', precio: 75000, imagen: 'assets/vehiculo-4.jpg' },
    { nombre: 'Vehículo 5', precio: 65000, imagen: 'assets/vehiculo-5.jpg' },
    { nombre: 'Vehículo 6', precio: 80000, imagen: 'assets/vehiculo-6.webp' }
  ];
}
