import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppLayoutComponent } from './layout/app.layout.component';

@NgModule({
    imports: [
        RouterModule.forRoot(
            [
                {
                    component: AppLayoutComponent,
                    path: 'card',
                    loadChildren: () =>
                        import('./components/card.module').then(
                            (m) => m.CardModule
                        ),
                    // canDeactivate: [AuthGuardGuard],
                },

                { path: '**', redirectTo: '/notfound' },
            ]
        ),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
