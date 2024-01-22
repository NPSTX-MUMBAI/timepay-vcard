import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppLayoutComponent } from './layout/app.layout.component';

@NgModule({
    imports: [
        RouterModule.forRoot(
            [
                {
                    path: '',
                    redirectTo: 'card',
                    pathMatch: 'full',
                    // component: AppLayoutComponent,
                },
                {
                    path: 'card',
                    loadChildren: () =>
                        import('./components/card.module').then(
                            (m) => m.CardModule
                        ),
                    component: AppLayoutComponent,
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
