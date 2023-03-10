import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconComponent } from '@components/ui/icon/icon.component';
import { SignInComponent } from '@pages/sign-in/sign-in.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { InputComponent } from '@components/forms/input/input.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { UrlInterceptorService } from "@services/url-interceptor.service";
import { AuthInterceptorService } from "@services/auth-interceptor.service";
import { HomeComponent } from '@pages/home/home.component';
import { CdkTableModule } from "@angular/cdk/table";
import {
	SendPushMessageDialogComponent
} from '@components/modals/send-push-message-dialog/send-push-message-dialog.component';
import { DialogComponent } from '@components/ui/dialog/dialog.component';
import { DialogModule } from "@angular/cdk/dialog";
import { DialogHeaderComponent } from '@components/ui/dialog-header/dialog-header.component';
import { DialogFooterComponent } from '@components/ui/dialog-footer/dialog-footer.component';
import { SelectComponent } from '@components/forms/select/select.component';
import { OverlayModule } from "@angular/cdk/overlay";
import { AddClientDialogComponent } from '@components/modals/add-client-dialog/add-client-dialog.component';
import { ConfirmComponent } from '@components/modals/confirm/confirm.component';
import { DiscountPipe } from '@pipes/discount.pipe';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from "ngx-toastr";
import { NgMultiSelectDropDownModule } from "ng-multiselect-dropdown";

@NgModule({
	declarations: [
		AppComponent,
		IconComponent,
		SignInComponent,
		InputComponent,
		HomeComponent,
		SendPushMessageDialogComponent,
		DialogComponent,
		DialogHeaderComponent,
		DialogFooterComponent,
		SelectComponent,
		AddClientDialogComponent,
		ConfirmComponent,
		DiscountPipe,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ReactiveFormsModule,
		HttpClientModule,
		CdkTableModule,
		DialogModule,
		OverlayModule,
		BrowserAnimationsModule,
		ToastrModule.forRoot({
			timeOut: 3000,
			closeButton: true,
		}),
		NgMultiSelectDropDownModule.forRoot(),
		FormsModule
	],
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: UrlInterceptorService,
			multi: true
		},
		{
			provide: HTTP_INTERCEPTORS,
			useClass: AuthInterceptorService,
			multi: true
		},
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
