import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconComponent } from '@components/ui/icon/icon.component';
import { SignInComponent } from '@pages/sign-in/sign-in.component';
import { ReactiveFormsModule } from "@angular/forms";
import { InputComponent } from '@components/forms/input/input.component';
import { ErrorComponent } from '@components/ui/error/error.component';

@NgModule({
	declarations: [
		AppComponent,
		IconComponent,
		SignInComponent,
		InputComponent,
		ErrorComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ReactiveFormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
