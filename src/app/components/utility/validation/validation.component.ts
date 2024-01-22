import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.scss']
})
export class ValidationComponent {
  @Input() control: AbstractControl | any;
   @Input() controleName : any


  getErrorMessage(errorKey: any): string {
    if(errorKey.errors.required){
      return `${this.controleName} is required.`;
    }

     if(errorKey.errors.minlength){
      return 'Password Mininum 8 Characters'
     }

     if(errorKey.errors.email){
      return `Please enter valid ${this.controleName}`
     }  

    if(errorKey.errors.pattern){;
      if(this.controleName == 'Password'){
        return 'At least (One Symbal , one numeric , one lowercase , one uppercase)'
      }
      return  `Please enter valid ${this.controleName}`
    }
    if(errorKey.errors.passwordsNotMatched){
      return `Password Does Not Match`
    }


    if(errorKey.errors.zeroValue){
      return `${this.controleName} Value must  be grater than 0.`;
    }

    if(errorKey.errors.minlength){  
      return 'Passwoard '
    }

    return '';
  }
}
