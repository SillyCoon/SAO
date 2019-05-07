import { ValidatorFn, FormGroup, ValidationErrors } from '@angular/forms';

export const PasswordEqualityValidator: ValidatorFn = (fg: FormGroup): ValidationErrors | null => {
  console.log(fg.get('password').value === fg.get('secondPassword').value);
  return fg.get('password').value === fg.get('secondPassword').value
    ? null
    : { equals: true };
}
