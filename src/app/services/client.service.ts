import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { AuthService } from "@services/auth.service";
import { Observable } from "rxjs";
import { model_Client } from "@models/model_Client";

@Injectable({
	providedIn: 'root'
})
export class ClientService {

	constructor(private http: HttpClient, private authService: AuthService) {
	}

	getClients(): Observable<model_Client> {
		return this.http.get<model_Client>(`${this.authService.token}/passes`);
	}
}
