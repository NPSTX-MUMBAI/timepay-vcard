import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { FormsModule } from '@angular/forms';
import{TableModule} from 'primeng/table'
import { CardModule } from './components/card.module';
import { ButtonModule } from 'primeng/button';
import { UiModule } from './ui/ui.module';

@NgModule({
    declarations: [
        AppComponent,
       
    ],
    imports: [
        AppRoutingModule,
        AppLayoutModule,
        FormsModule,
        TableModule,
        CardModule,
        ButtonModule,
        UiModule
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
