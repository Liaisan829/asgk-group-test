import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { DestroyService } from "@services/destroy.service";
import { ClientService } from "@services/client.service";
import { filter, takeUntil } from "rxjs";
import { model_Pass } from "@models/model_Pass";
import { Dialog } from "@angular/cdk/dialog";
import {
	SendPushMessageDialogComponent
} from "@components/modals/send-push-message-dialog/send-push-message-dialog.component";

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.sass'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
	dataSource: Array<model_Pass> = [];
	columns = ['fio', 'phone', 'email', 'birthday', 'visits', 'discount', 'link', 'bonus', 'date_last', 'summ'];

	constructor(
		private destroy$: DestroyService,
		private clientService: ClientService,
		private cdr: ChangeDetectorRef,
		private dialog: Dialog
	) {
		this.getClients();
	}

	getClients() {
		this.clientService.getClients()
			.pipe(takeUntil(this.destroy$))
			.subscribe({
				next: (res) => {
					this.dataSource = res.passes;
					this.cdr.markForCheck();
				}
			});
	}

	openPushMessageDialog(): void {
		this.dialog.open(SendPushMessageDialogComponent, {
			hasBackdrop: true,
			width: '450px',
			backdropClass: 'dialog-backdrop',
			data: {
				users: this.dataSource
			},
		}).closed
			.pipe(
				takeUntil(this.destroy$),
				filter(dialogResult => !!dialogResult)
			)
			.subscribe({
				next: () => {}
			});
	}
}
