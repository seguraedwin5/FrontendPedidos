import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './plantilla/error/error.component';
import { InicioComponent } from './plantilla/inicio/inicio.component';

const routes: Routes = [
  {
    path : "inicio",
    component: InicioComponent
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/inicio"
  },
  //lazy loading: precargar los modulos
  {
    path: "seguridad",
    loadChildren: () => import("./modulos/seguridad/seguridad.module")
                              .then( m => m.SeguridadModule )
  },
  {
    path: "administracion",
    loadChildren: () => import("./modulos/administracion/administracion.module")
                              .then( m => m.AdministracionModule )
  },
  {
    path: "pedidos",
    loadChildren: () => import("./modulos/pedidos/pedidos.module")
                              .then( m => m.PedidosModule )
  },
  {
    path: "**",
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
