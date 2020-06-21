import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { PublicHomeModule } from './public-home/public-home.module';



const routes: Routes = [

  { path: '', redirectTo: '/public-home', pathMatch: 'full' },

  {
    path: 'public-home',
    loadChildren: () => import('./public-home/public-home.module').then(m => m.PublicHomeModule)
  },
  //  {
  //   path: 'public-home',
  //   component: HeaderComponent
  // },
  {
    path: 'electrical-svc',
    loadChildren: () => import('./electricalsvctypes/electricalsvctypes.module').then(m => m.ElectricalsvctypesModule)
  },
  { path: '**', redirectTo: '/public-home', pathMatch: 'full'  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
