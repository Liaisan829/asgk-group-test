import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-dialog-footer',
	templateUrl: './dialog-footer.component.html',
	styleUrls: ['./dialog-footer.component.sass'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogFooterComponent {
}
