import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'user', pathMatch: 'full'},
  { path: 'user', loadChildren: './user/user.module#UserModule' },
  { path: 'admin-panel', loadChildren: './admin/admin.module#AdminModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {

}
