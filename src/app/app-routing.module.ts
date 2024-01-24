import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppLayoutComponent } from './layout/app.layout.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';

@NgModule({
    imports: [
        RouterModule.forRoot(
            [
                {
                    path: '',
                    redirectTo: 'home',
                    pathMatch: 'full',
                    // component: AppLayoutComponent,
                },
                {path:'home', component:LandingpageComponent},
                {
                    path: 'card',
                    loadChildren: () =>
                        import('./components/card.module').then(
                            (m) => m.CardModule
                        ),
                    // component: AppLayoutComponent,
                    // canDeactivate: [AuthGuardGuard], 
                },

                { path: '**', redirectTo: '/notfound' },
            ],
            {
                scrollPositionRestoration: 'enabled',
                anchorScrolling: 'enabled',
                onSameUrlNavigation: 'reload',
            }
        ),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
