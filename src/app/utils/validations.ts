import { Validators } from "@angular/forms";

export const PasswordValidators = [
	Validators.required,
	Validators.minLength(5),
];

