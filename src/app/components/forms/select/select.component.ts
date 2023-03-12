import { ChangeDetectionStrategy, Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
	selector: 'app-select',
	templateUrl: './select.component.html',
	styleUrls: ['./select.component.sass'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => SelectComponent),
			multi: true
		}
	]
})
export class SelectComponent {
	@Input() optionsList: string[] = [];
	@Input() placeholder: string = ''
	isOpen: boolean = false
	value: string = '';

	toggle(): void {
		this.isOpen = !this.isOpen;
	}

	onChangeCallback = (v: string) => {
	}

	onTouchedCallback = () => {
	}

	registerOnChange(fn: any): void {
		this.onChangeCallback = fn;
	}

	registerOnTouched(fn: any): void {
		this.onTouchedCallback = fn;
	}

	writeValue(value: string): void {
		this.value = value;
	}

	selectItem(value: any): void {
		this.value = value;
		this.placeholder = value;
		this.isOpen = false;
		this.onChangeCallback(this.value)
		this.onTouchedCallback();
	}
}
