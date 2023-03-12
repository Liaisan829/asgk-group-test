import { ChangeDetectionStrategy, Component, Optional } from '@angular/core';
import { DialogRef } from "@angular/cdk/dialog";

@Component({
	selector: 'app-dialog-header',
	templateUrl: './dialog-header.component.html',
	styleUrls: ['./dialog-header.component.sass'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogHeaderComponent {
	constructor(
		@Optional() public dialogRef: DialogRef<any>,
	) {
	}
}
