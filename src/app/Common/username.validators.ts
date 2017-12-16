import { AbstractControl } from "@angular/forms/src/model";
import { Validator, ValidationErrors } from "@angular/forms/src/directives/validators";


export class UsernameValidators{
  static cannotContainSpace(control:AbstractControl):ValidationErrors |null{
        if((control.value as string).indexOf(' ') >=0)
        return {cannotContainSpace:true}
        return null;
    }
}