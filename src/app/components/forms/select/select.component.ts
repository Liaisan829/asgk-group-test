import { ChangeDetectionStrategy, Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { model_Pass } from "@models/model_Pass";

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
	@Input() optionsList: Array<model_Pass> = [];
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
		this.value = value.user_id;
		this.placeholder = value.fio;
		this.isOpen = false;
		this.onChangeCallback(value.user_id)
		this.onTouchedCallback();
	}
}
