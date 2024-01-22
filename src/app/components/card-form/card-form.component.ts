import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from 'src/app/service/contact.service';

@Component({
    selector: 'app-card-form',
    templateUrl: './card-form.component.html',
    styleUrls: ['./card-form.component.scss'],
})
export class CardFormComponent {
    cardGroup: FormGroup;
    submitted = false;
    constructor(private fb: FormBuilder, private contactSrv: ContactService) {
        this.cardGroup = fb.group({
            firstName: ['', Validators.required],
            lastName: [''],
            email: ['', [Validators.required, Validators.email]],
            phoneNo: ['', [Validators.required]],
            address: ['', Validators.required],
            jobtitle: ['', [Validators.required]],
            companyName: ['', [Validators.required]],
        });
    }

    /// Button save
    onSave() {
        if (this.cardGroup.invalid) {
            return this.contactSrv.InvalidForm(this.cardGroup);
        } else {
            console.log(this.cardGroup.value);
            // this.contactSrv.createContact(this.cardGroup.va)
        }
    }
}
