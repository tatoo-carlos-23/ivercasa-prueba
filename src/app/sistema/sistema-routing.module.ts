import { SistemaComponent } from './sistema.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/inicio',
    pathMatch:'full'

  },
  {
    path: '',
    component: SistemaComponent,
    children: [
      {
        path:'inicio',
        loadChildren:()=>import('../inicio/inicio.module').then(i => i.InicioModule)

      },
      {
        path:'destacado',
        loadChildren:()=>import('../propiedad-destacadas/propiedad-destacadas.module').then(pd => pd.PropiedadDestacadasModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SistemaRoutingModule { }
