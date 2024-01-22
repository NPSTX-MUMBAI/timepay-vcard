import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from 'src/app/service/contact.service';

@Component({
    selector: 'app-card-form',
    templateUrl: './card-form.component.html',
    styleUrls: ['./card-form.component.scss'],
})
export class CardFormComponent {
    cardGroup: FormGroup;
    submitted = false;
    constructor(
        private fb: FormBuilder,
        private contactSrv: ContactService,
        private router: Router
    ) {
        this.cardGroup = fb.group({
            firstName: ['', Validators.required],
            lastName: [''],
            email: ['', [Validators.required, Validators.email]],
            phoneNumber: ['', [Validators.required]],
            address: ['', Validators.required],
            jobTitle: ['', [Validators.required]],
            companyName: ['', [Validators.required]],
        });
    }

    /// Button save
    onSave() {
        if (this.cardGroup.invalid) {
            return this.contactSrv.InvalidForm(this.cardGroup);
        } else {
            console.log(this.cardGroup.value);
            this.contactSrv
                .createContact(this.cardGroup.value)
                .then((res) => {
                    this.router.navigate(['card/cardlist']);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }
}
