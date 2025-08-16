import { Routes } from '@angular/router';
import { Ofertas } from './pages/ofertas/ofertas';
import { ElectronicaTecnologia } from './pages/productos/electronica-tecnologia/electronica-tecnologia';
import { Muebles } from './pages/productos/muebles/muebles';
import { Productos } from './pages/productos/productos';
import { Vehiculos } from './pages/productos/vehiculos/vehiculos';
import { Vestimenta } from './pages/productos/vestimenta/vestimenta';
import { Servicios } from './pages/servicios/servicios';

export const routes: Routes = [
  { path: '', redirectTo: 'productos/vestimenta', pathMatch: 'full' },
  {
    path: 'productos',
    component: Productos,
    children: [
      { path: 'vestimenta', component: Vestimenta },
      { path: 'muebles', component: Muebles },
      { path: 'vehiculos', component: Vehiculos },
      { path: 'electronica-tecnologia', component: ElectronicaTecnologia },
      { path: '', redirectTo: 'vestimenta', pathMatch: 'full' }
    ]
  },
  { path: 'ofertas', component: Ofertas },
  { path: 'servicios', component: Servicios },
  { path: '**', redirectTo: 'productos/vestimenta' }
];