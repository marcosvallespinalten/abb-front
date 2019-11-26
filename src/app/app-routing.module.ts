import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { appSettings } from '@configs/app-settings.config';


const routes: Routes = [
  {
    path: '',
    redirectTo: appSettings.homePath,
    pathMatch: 'full'
  },
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: () => import('@modules/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
