import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconComponent } from '@components/ui/icon/icon.component';
import { InputComponent } from '@components/forms/input/input.component';

@NgModule({
	declarations: [
		AppComponent,
		IconComponent,
		InputComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
