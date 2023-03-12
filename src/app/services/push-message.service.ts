import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { AuthService } from "@services/auth.service";
import { Observable } from "rxjs";
import { model_PushMessageResponse } from "@models/model_PushMessageResponse";
import { model_PushMessageData } from "@models/model_PushMessageData";

@Injectable({
	providedIn: 'root'
})
export class PushMessageService {

	constructor(
		private http: HttpClient,
		private authService: AuthService
	) {
	}

	sendPushMessage(data: model_PushMessageData): Observable<model_PushMessageResponse> {
		return this.http.post<model_PushMessageResponse>(`${this.authService.token}/message/push`, data);
	}
}
