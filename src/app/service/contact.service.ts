import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class ContactService {
    constructor(private http: HttpClient) {}

    InvalidForm(form: FormGroup) {
        Object.keys(form.controls).forEach((key) => {
            const control = form.get(key);
            control.markAsDirty(); // Mark each control as touched to trigger the error display
        });
    }

    getContact() {
        return new Promise((resolve, reject) => {
            this.http.get(`${environment.apiUrl}vcard/getAllUser`).subscribe({
                next: (res: any) => {
                    if (res.status) {
                        resolve(res);
                    } else {
                        reject(res);
                    }
                },
                error: (error: HttpErrorResponse) => {
                    reject({
                        status: false,
                        msg: 'Server Side Error',
                    });
                },
            });
        });
    }

    getQrcode(body: any) {
        return new Promise((resolve, reject) => {
            this.http
                .post(`${environment.apiUrl}vcard/generateQr`, body)
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
                .subscribe({
                    next: (res: any) => {
                        if (res.status) {
                            resolve(res);
                        } else {
                            reject(res);
                        }
                    },
                    error: (error: HttpErrorResponse) => {
                        console.log(error);
                        alert(error.message);
                    },
                });
        });
    }

    removeContact(id: string) {
        return new Promise((resolve, reject) => {
            this.http
                .delete(`${environment.apiUrl}vcard/removeContact/${id}`)
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
