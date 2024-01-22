import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LogarithmicScale } from 'chart.js';
import { MenuItem } from 'primeng/api';
import { Table } from 'primeng/table';
import { ContactService } from 'src/app/service/contact.service';

@Component({
    selector: 'app-card-list',
    templateUrl: './card-list.component.html',
    styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent implements OnInit {
    contacts: any[] = [];

    items: MenuItem[] | undefined;
    @ViewChild('menu') menu: any;
    qrCodeString: string = '';

    visible: boolean = false;

    constructor(
        private router: Router,
        private contactService: ContactService
    ) {}

    AddCard() {
        this.router.navigate(['card/cardform']);
    }

    showDialog(userId: string) {
        console.log(userId);

        this.contactService
            .getQrcode({ userId: userId })
            .then((res: any) => {
                this.qrCodeString = res.data;
                console.log(this.qrCodeString);
                this.visible = true;
            })
            .catch((error) => {
                console.log(error);
            });
    }

    removeContact(id: string) {
        this.contactService
            .removeContact(id)
            .then((res) => {
                this.getContact();
            })
            .catch((error) => {
                console.log(error);
            });
    }

    clickHandler(userId: string) {
        this.items = [
            {
                label: 'Options',
                items: [
                    {
                        label: 'QR Code',
                        icon: 'pi pi-qrcode',
                        command: () => {
                            this.showDialog(userId);
                        },
                    },
                    {
                        label: 'Remove',
                        icon: 'pi pi-times',
                        command: () => {
                            this.removeContact(userId);
                        },
                    },
                ],
            },
            {},
        ];
    }

    ngOnInit() {
        this.getContact();
    }

    async getContact() {
        this.contactService
            .getContact()
            .then((res: any) => {
                this.contacts = res.data;
            })
            .catch((err) => {
                console.log(err);
            });
    }
}
