import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss']
})
export class CardFormComponent {
  
  gymGroup: FormGroup
  gymId:any
  constructor(private fb: FormBuilder ,)  {
     this.gymGroup = fb.group({
      firstName: ['', Validators.required],
      lastName: ['' , [Validators.required , Validators.email ,   Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
       mobileNo: ['' ,[Validators.required , Validators.pattern("[- +()0-9]{10,12}")]],
       line1: ['', Validators.required,Validators.pattern(/^[A-Z]{5}[0-9]{4}[A-Z]$/)],
       line2: ['', [Validators.required, Validators.pattern('^([0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}[0-9A-Z]{1})$')]],
       address: this.fb.group({
         line1: ['', [Validators.required]],
         line2: ['', [Validators.required]],
         locality: ['', [Validators.required]],
         city: ['', [Validators.required]],
         state: ['', [Validators.required]],
         country: ['', [Validators.required]],
         pinCode: ['', [Validators.required]],
       })
      
  });
    
      }
 
 
   
   
   
 /// Button save 
 onSave() {
  
    
 }

}
