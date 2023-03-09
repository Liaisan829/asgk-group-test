import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

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
			password: ['', [Validators.required]]
		});
	}

	get formIsValid(): boolean {
		return this.form.invalid;
	}

	submit() {

	}
}
