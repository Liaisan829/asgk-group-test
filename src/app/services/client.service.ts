import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { AuthService } from "@services/auth.service";
import { Observable } from "rxjs";
import { model_Client } from "@models/model_Client";
import { model_ClientCreate } from "@models/model_ClientCreate";
import { model_Pass } from "@models/model_Pass";

@Injectable({
	providedIn: 'root'
})
export class ClientService {

	constructor(private http: HttpClient, private authService: AuthService) {
	}

	getClients(): Observable<model_Client> {
		return this.http.get<model_Client>(`${this.authService.token}/passes`);
	}

	addClient(data: model_ClientCreate): Observable<model_Pass> {
		return this.http.post<model_Pass>(`${this.authService.token}/passes`, data)
	}
}
