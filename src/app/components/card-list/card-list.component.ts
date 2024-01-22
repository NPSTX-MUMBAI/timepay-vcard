import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
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

    loading: boolean = true;

    constructor(
        private router: Router,
        private contactService: ContactService
    ) {}

    AddCard() {
        this.router.navigate(['card/cardform']);
    }

    ngOnInit() {
        this.getContact();
        this.items = [
            {
                label: 'Options',
                items: [
                    {
                        label: 'QR Code',
                        icon: 'pi pi-refresh',
                        command: () => {},
                    },
                    {
                        label: 'Delete',
                        icon: 'pi pi-times',
                        command: () => {},
                    },
                ],
            },
            {},
        ];
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
