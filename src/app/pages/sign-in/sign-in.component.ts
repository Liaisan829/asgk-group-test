import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { PasswordValidators } from '@utils/validations';
import { AuthService } from "@services/auth.service";
import { takeUntil } from "rxjs";
import { DestroyService } from "@services/destroy.service";
import { Router } from "@angular/router";

@Component({
	selector: 'app-sign-in',
	templateUrl: './sign-in.component.html',
	styleUrls: ['./sign-in.component.sass'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignInComponent {
	form!: FormGroup;

	constructor(
		private fb: FormBuilder,
		private authService: AuthService,
		private destroy$: DestroyService,
		private router: Router
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
		this.authService.signIn(this.form.value)
			.pipe(takeUntil(this.destroy$))
			.subscribe({
				next: (res) => {
					this.authService.authorize(res.auth_token!);

					this.router.navigate(['/']);
				},
				error: (err) => {
					console.log(err);
				}
			})
	}

	control(control: string) {
		return this.form.get(control);
	}

	hasError(formControlName: string, errorName: string) {
		return (this.control(formControlName)?.touched || this.control(formControlName)?.dirty) && this.control(formControlName)?.hasError(errorName)
	}
}
