import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';
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
        private contactService: ContactService,
        private messagSrv: MessageService
    ) {}

    AddCard() {
        this.router.navigate(['card/cardform']);
    }

    showDialog(userId: string) {
        this.contactService
            .getQrcode({ userId: userId })
            .then((res: any) => {
                this.qrCodeString = res.data;
                this.visible = true;
            })
            .catch((error) => {
                console.log(error);
            });
    }

    removeContact(id: string) {
        this.contactService
            .removeContact(id)
            .then((res: any) => {
                this.getContact();
                this.messagSrv.add({
                    severity: 'success',
                    summary: 'Success',
                    detail: `${res.msg}`,
                });
            })
            .catch((error) => {
                this.messagSrv.add({
                    severity: 'error',
                    summary: 'Error',
                    detail: `${error.msg}`,
                });
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
                        icon: 'pi pi-trash',
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
            .catch((error) => {
                this.messagSrv.add({
                    severity: 'error',
                    summary: 'Error',
                    detail: `${error.msg}`,
                });
            });
    }
}
