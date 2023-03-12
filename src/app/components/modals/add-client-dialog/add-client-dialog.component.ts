import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { DestroyService } from "@services/destroy.service";
import { ClientService } from "@services/client.service";
import { takeUntil } from "rxjs";
import { DialogRef } from "@angular/cdk/dialog";
import { ToastService } from "@services/toast.service";

@Component({
	selector: 'app-add-client-dialog',
	templateUrl: './add-client-dialog.component.html',
	styleUrls: ['./add-client-dialog.component.sass'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddClientDialogComponent {
	form!: FormGroup;

	constructor(
		private fb: FormBuilder,
		private destroy$: DestroyService,
		private clientService: ClientService,
		private dialog: DialogRef,
		private toast: ToastService
	) {
		this.buildForm();
	}

	private buildForm() {
		this.form = this.fb.group({
			template: [''],
			first_name: [''],
			last_name: [''],
			pat_name: [''],
			phone: [''],
			email: [''],
			birthday: [''],
			gender: [''],
			barcode: [''],
			discount: [''],
			bonus: [''],
			loyalty_level: ['']
		});
	}

	addClient() {
		//402 ошибка
		this.clientService.addClient(this.form.value)
			.pipe(takeUntil(this.destroy$))
			.subscribe({
				next: () => {
					this.toast.success("Клиент успешно добавлен");
				},
				error: (err) => {
					this.toast.error(err);
				},
				complete: () => {
					this.dialog.close(true);
				}
			});
	}

	get formIsValid(): boolean {
		return this.form.invalid;
	}
}
