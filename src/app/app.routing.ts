import { Routes, RouterModule } from '@angular/router';

import { WrapperComponent } from '@shared/layouts/wrapper/wrapper.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '',
    component: WrapperComponent,
    children: [
      {
        path: 'static/back',
        loadChildren: () => import('./transfer-back/transfer-back.module').then(m => m.TransferBackModule),
      },
    ],
  },
  {
    path: '',
    component: WrapperComponent,
    children: [{ path: '**', loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundModule) }],
  },
];
// must use {initialNavigation: 'enabled'}) - for one load page, without reload
export const AppRoutes = RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking' });
