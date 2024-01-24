import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardFormComponent } from './card-form/card-form.component';
import { CardListComponent } from './card-list/card-list.component';
import { RouterModule } from '@angular/router';
import { UiModule } from '../ui/ui.module';
import { UtilityModule } from './utility/utility.module';
import { LandingpageComponent } from './landingpage/landingpage.component';


type PathMatch = 'full' | 'prefix';

let router = [
    { path: '', redirectTo: 'cardlist', pathMatch: 'full' as PathMatch },
    { path: 'cardform', component: CardFormComponent },
    { path: 'cardlist', component: CardListComponent },
    { path: 'landingpage', component: LandingpageComponent },
];

@NgModule({
    declarations: [CardFormComponent, CardListComponent, LandingpageComponent],
    imports: [CommonModule,UiModule, RouterModule.forChild(router) , UtilityModule],
})
export class CardModule {}
