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
      lastName: ['' , [Validators.required , Validators.email ,]],
       mobileNo: ['' ,[Validators.required , ]],
       line1: ['', Validators.required,],
       line2: ['', [Validators.required, ]],
      
      
  });
    
      }
 
 
   
   
   
 /// Button save 
 onSave() {
  
    
 }

}
