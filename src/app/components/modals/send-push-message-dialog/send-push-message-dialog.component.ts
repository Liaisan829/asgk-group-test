import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { DestroyService } from "@services/destroy.service";
import { PushMessageService } from "@services/push-message.service";
import { DIALOG_DATA, DialogRef } from "@angular/cdk/dialog";
import { model_Pass } from "@models/model_Pass";
import { takeUntil } from "rxjs";

interface DialogData {
	users: model_Pass[];
}

@Component({
	selector: 'app-send-push-message-dialog',
	templateUrl: './send-push-message-dialog.component.html',
	styleUrls: ['./send-push-message-dialog.component.sass'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SendPushMessageDialogComponent {
	form!: FormGroup;

	constructor(
		@Inject(DIALOG_DATA) public dialogData: DialogData,
		private dialog: DialogRef,
		private fb: FormBuilder,
		private destroy$: DestroyService,
		private pushMessageService: PushMessageService,
	) {
		this.buildForm();
	}

	private buildForm() {
		this.form = this.fb.group({
			user_id: ['', [Validators.required]],
			date_start: [''],
			push_message: ['', [Validators.required]]
		});
	}

	sendPushMessage() {
		this.pushMessageService.sendPushMessage(this.form.value)
			.pipe(takeUntil(this.destroy$))
			.subscribe({
					next: () => {
					},
					error: () => {
					},
					complete: () => {
						this.dialog.close(true);
					}
				}
			);
	}

	get formIsValid(): boolean {
		return this.form.invalid;
	}
}
