import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { cU } from '@fullcalendar/core/internal-common';
import { MessageService } from 'primeng/api';
import { ContactService } from 'src/app/service/contact.service';

@Component({
    selector: 'app-card-form',
    templateUrl: './card-form.component.html',
    styleUrls: ['./card-form.component.scss'],
})
export class CardFormComponent {
    cardGroup: FormGroup;
    customFormGroup: FormGroup;
    submitted = false;
    visible = false;
    constructor(
        private fb: FormBuilder,
        private contactSrv: ContactService,
        private router: Router,
        private messagSrv: MessageService
    ) {
        this.cardGroup = fb.group({
            firstName: ['', Validators.required],
            lastName: [''],
            email: ['', [Validators.required, Validators.email]],
            phoneNumber: ['', [Validators.required]],
            address: ['', Validators.required],
            jobTitle: ['', [Validators.required]],
            companyName: ['', [Validators.required]],

            other: this.fb.array([]),
        });

        this.customFormGroup = fb.group({
            label: ['', Validators.required],
            value: [''],
        });
    }

    get OtherFieldsElementCntr() {
        return this.cardGroup.controls['other'] as FormArray;
    }

    /// Button save
    onSave() {
        if (this.cardGroup.invalid) {
            return this.contactSrv.InvalidForm(this.cardGroup);
        } else {
            this.contactSrv
                .createContact(this.cardGroup.value)
                .then((res: any) => {
                    this.router.navigate(['card/cardlist']);
                })
                .catch((err) => {
                    this.messagSrv.add({
                        severity: 'error',
                        summary: 'Errr',
                        detail: `${err.msg}`,
                    });
                    console.log(err);
                });
        }
    }

    showDialog() {
        this.visible = true;
    }
    onSubmit() {
        if (this.customFormGroup.invalid) {
            return this.contactSrv.InvalidForm(this.customFormGroup);
        } else {
            const customfield = this.cardGroup.get('other') as FormArray;
            customfield.push(
                this.fb.group({
                    customeLabel: [this.customFormGroup.get('label').value],
                    value: [
                        this.customFormGroup.get('value').value,
                        Validators.required,
                    ],
                })
            );

            this.customFormGroup.reset();
            this.visible = false;
        }
    }

    remove(index: number) {
        const customfield = this.cardGroup.get('other') as FormArray;
        customfield.removeAt(index);
    }
}
