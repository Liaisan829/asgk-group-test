import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from "@pages/sign-in/sign-in.component";
import { AuthGuard } from "@guards/auth.guard";
import { HomeComponent } from "@pages/home/home.component";

const routes: Routes = [
	{
		path: '',
		canActivate: [AuthGuard],
		component: HomeComponent
	},
	{
		path: 'sign-in',
		component: SignInComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
