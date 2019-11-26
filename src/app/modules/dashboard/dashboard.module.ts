import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { DashboardRouting } from './dashboard.routing';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FeatureComponent } from './components/feature/feature.component';
import { PartComponent } from './components/part/part.component';

@NgModule({
  imports: [
    SharedModule,

    DashboardRouting,
  ],
  declarations: [
    DashboardComponent,
    FeatureComponent,
    PartComponent
  ],
})
export class DashboardModule { }
