import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { PasswordValidators } from '@utils/validations';

@Component({
	selector: 'app-sign-in',
	templateUrl: './sign-in.component.html',
	styleUrls: ['./sign-in.component.sass'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignInComponent {
	form!: FormGroup;

	constructor(
		private fb: FormBuilder
	) {
		this.buildForm();
	}

	private buildForm() {
		this.form = this.fb.group({
			login: ['', [Validators.required]],
			password: ['', [...PasswordValidators]]
		});
	}

	get formIsValid(): boolean {
		return this.form.invalid;
	}

	submit() {

	}

	control(control: string) {
		return this.form.get(control);
	}

	hasError(formControlName: string, errorName: string) {
		return (this.control(formControlName)?.touched || this.control(formControlName)?.dirty) && this.control(formControlName)?.hasError(errorName)
	}
}
