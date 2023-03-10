import { Injectable } from '@angular/core';
import { LocalStorage } from "@utils/local-storage";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { model_SignIn } from "@models/model_SignIn";
import { model_TokenResponse } from "@models/model_TokenResponse";

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	@LocalStorage() token?: string | null;

	constructor(
		private http: HttpClient
	) {
	}

	signIn(data: model_SignIn): Observable<model_TokenResponse> {
		return this.http.post<model_TokenResponse>('https://api.asgk-group.ru/test-auth-only', data);
	}

	authorize(token: string): void {
		this.token = token;
	}

	get isAuthorized(): boolean{
		return this.token !== null;
	}
}
