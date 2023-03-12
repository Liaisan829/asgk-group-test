import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-dialog',
	templateUrl: './dialog.component.html',
	styleUrls: ['./dialog.component.sass'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogComponent {
}
