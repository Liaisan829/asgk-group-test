import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { DestroyService } from "@services/destroy.service";
import { ClientService } from "@services/client.service";
import { filter, switchMap, takeUntil } from "rxjs";
import { model_Pass } from "@models/model_Pass";
import { Dialog } from "@angular/cdk/dialog";
import {
	SendPushMessageDialogComponent
} from "@components/modals/send-push-message-dialog/send-push-message-dialog.component";
import { AddClientDialogComponent } from '@components/modals/add-client-dialog/add-client-dialog.component';
import { ConfirmComponent } from "@components/modals/confirm/confirm.component";

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.sass'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
	dataSource: Array<model_Pass> = [];
	columns = ['fio', 'phone', 'email', 'birthday', 'visits', 'discount', 'link', 'bonus', 'date_last', 'summ', 'delete'];

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
				next: () => {
				}
			});
	}

	addClient() {
		this.dialog.open(AddClientDialogComponent, {
			hasBackdrop: true,
			width: '500px',
			backdropClass: 'dialog-backdrop',
		}).closed
			.pipe(
				takeUntil(this.destroy$),
				filter(dialogResult => !!dialogResult)
			)
			.subscribe(() => {
				this.getClients();
			});
	}

	deleteClient(client: model_Pass) {
		const dialog = this.dialog.open(ConfirmComponent, {
			hasBackdrop: true,
			width: '500px',
			backdropClass: 'dialog-backdrop',
			data: {
				header: 'Удаление клиента',
				text: `Вы действительно хотите удалить клиента ${ client.first_name }?`,
				confirm: 'Удалить',
				cancel: 'Отменить',
			},
		});

		dialog.closed
			.pipe(
				takeUntil(this.destroy$),
				filter(dialogResult => !!dialogResult),
				switchMap(() => this.clientService.deleteClient(String(client.user_id!)))
			)
			.subscribe({
				next: () => {
					this.getClients();
				}
			})
	}
}
