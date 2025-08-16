import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'productos/vestimenta', pathMatch: 'full' },
  {
    path: 'productos',
    loadComponent: () => import('./pages/productos/productos').then(m => m.Productos),
    children: [
      {
        path: 'vestimenta',
        loadComponent: () => import('./pages/productos/vestimenta/vestimenta').then(m => m.Vestimenta)
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