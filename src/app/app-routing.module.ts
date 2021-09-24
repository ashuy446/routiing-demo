import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component'
import { AdminComponent } from './admin/admin.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'


const routes: Routes = [
  {
    path:'admin', loadChildren:()=>import('./admin/admin.module')
    .then(mod=>mod.AdminModule)
  },
  {
    path:'user', loadChildren:()=>import('./user/user.module')
    .then(mod=>mod.UserModule)
  }

  // {
  //   path: 'user',
  //   component: UserComponent
  // },

  // {
  //   path: 'admin',
  //   component: AdminComponent
  // },
  // {
  //   path: '**',
  //   component: PageNotFoundComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }