import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressComponent } from './address/address.component';
import { AuthGuardService } from './authentication/services/auth-guard.service';
import { DashboardLayoutComponent } from './layout/dashboard.layout.component';

const routes: Routes = [
  {
		path: '',
		redirectTo: '/article',
		pathMatch: 'full'
	},
	{
		path: '',
		component: DashboardLayoutComponent,
		canActivate: [AuthGuardService],
		children: [
			{
				path: 'article',
				loadChildren: () => import('./article/article.module').then(m => m.ArticleModule)
			},
			{
				path: 'address',
				component: AddressComponent
			}
		]
	},
	{
		path: 'login',
		loadChildren: () => import('./authentication/auth.module').then(m => m.AuthModule)
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
