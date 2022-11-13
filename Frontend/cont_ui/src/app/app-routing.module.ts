import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateNewComponent } from './create-new/create-new.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'new', component: CreateNewComponent},
  {path: 'SignIn', component: LoginComponent},
  {path: 'PageNotFound', component: PageNotFoundComponent},
  {path: '**', redirectTo: 'SignIn', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
