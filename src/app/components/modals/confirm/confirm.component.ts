import { ChangeDetectionStrategy, Component, Inject, Optional } from '@angular/core';
import { DIALOG_DATA, DialogRef } from "@angular/cdk/dialog";

interface ConfirmDialogData {
	header: string;
	text: string;
	confirm: string;
	cancel: string;
}

@Component({
	selector: 'app-confirm',
	templateUrl: './confirm.component.html',
	styleUrls: ['./confirm.component.sass'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfirmComponent {

	constructor(
		@Optional() public dialogRef: DialogRef<boolean, ConfirmComponent>,
		@Optional() @Inject(DIALOG_DATA) public data: ConfirmDialogData,
	) {
	}

}
