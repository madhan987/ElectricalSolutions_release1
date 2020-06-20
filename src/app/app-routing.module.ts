import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [

  { path: '', redirectTo: '/public-home', pathMatch: 'full' },

  {
    path: 'public-home',
    loadChildren: () => import('./public-home/public-home.module').then(m => m.PublicHomeModule)
  },

  {
    path: 'electrical-svc',
    loadChildren: () => import('./electricalsvctypes/electricalsvctypes.module').then(m => m.ElectricalsvctypesModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
