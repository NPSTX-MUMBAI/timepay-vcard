import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardFormComponent } from './card-form/card-form.component';
import { CardListComponent } from './card-list/card-list.component';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

type PathMatch = "full" | 'prefix'

let router = [
    { path: '', redirectTo: 'cardlist', pathMatch:"full" as PathMatch},
    { path: 'cardform', component: CardFormComponent },
    { path: 'cardlist', component: CardListComponent },
];

@NgModule({
    declarations: [CardFormComponent, CardListComponent],
    imports: [TableModule, CommonModule,FormsModule,ReactiveFormsModule,InputTextModule,
    ButtonModule, RouterModule.forChild(router)],
})
export class CardModule {}
