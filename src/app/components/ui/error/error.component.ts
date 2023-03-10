import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
	selector: 'app-error',
	templateUrl: './error.component.html',
	styleUrls: ['./error.component.sass'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErrorComponent {
	@Input() error!: string;
}
