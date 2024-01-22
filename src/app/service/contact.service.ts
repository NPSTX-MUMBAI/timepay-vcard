import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class ContactService {
    constructor(private http: HttpClient) {}

    getContact() {
        return new Promise((resolve, reject) => {
            this.http
                .get(`${environment.apiUrl}vcard/getAllUser`)
                .subscribe((res: any) => {
                    if (res.status) {
                        resolve(res);
                    } else {
                        reject(res);
                    }
                });
        });
    }

    getQrcode(body:any) {
        return new Promise((resolve, reject) => {
            this.http
                .post(`${environment.apiUrl}vcard/generateQr` , body)
                .subscribe((res: any) => {
                    if (res.status) {
                        resolve(res);
                    } else {
                        reject(res);
                    }
                });
        });
    }

    createContact(body: any) {
        return new Promise((resolve, reject) => {
            this.http
                .post(`${environment.apiUrl}vcard/createDetails`, body)
                .subscribe((res: any) => {
                    if (res.status) {
                        resolve(res);
                    } else {
                        reject(res);
                    }
                });
        });
    }
}
