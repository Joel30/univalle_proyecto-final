import { Routes } from '@angular/router';
import { Productos } from './pages/productos/productos';
import { Vestimenta } from './pages/productos/vestimenta/vestimenta';

export const routes: Routes = [
  { path: '', redirectTo: 'productos/vestimenta', pathMatch: 'full' },
  {
    path: 'productos',
    component: Productos,
    children: [
      {
        path: 'vestimenta',
        component: Vestimenta
      },
      {
        path: 'muebles',
        loadComponent: () => import('./pages/productos/muebles/muebles').then(m => m.Muebles)
      },
      {
        path: 'vehiculos',
        loadComponent: () => import('./pages/productos/vehiculos/vehiculos').then(m => m.Vehiculos)
      },
      {
        path: 'electronica-tecnologia',
        loadComponent: () =>
          import('./pages/productos/electronica-tecnologia/electronica-tecnologia').then(
            m => m.ElectronicaTecnologia
          )
      },
      { path: '', redirectTo: 'vestimenta', pathMatch: 'full' }
    ]
  },
  {
    path: 'ofertas',
    loadComponent: () => import('./pages/ofertas/ofertas').then(m => m.Ofertas)
  },
  {
    path: 'servicios',
    loadComponent: () => import('./pages/servicios/servicios').then(m => m.Servicios)
  },
  { path: '**', redirectTo: 'productos/vestimenta' }
];