import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss']
})
export class CardFormComponent {
  
  cardGroup: FormGroup
  submitted=false
  constructor(private fb: FormBuilder ,)  {
     this.cardGroup = fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['' , [Validators.required , Validators.email ,]],
      phoneNo: ['' ,[Validators.required , ]],
      address: ['', Validators.required,],
       jobtitle: ['', [Validators.required, ]],
       companyName: ['', [Validators.required, ]],
      
      
  });
    
      }
 
 
   
   
   
 /// Button save 
 onSave() {
  this.submitted=true
  console.log(this.cardGroup.value);
  
    
 }

}
