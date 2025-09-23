import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientManagementComponent } from './client-management/client-management.component';
import { MeetingSchedulingComponent } from './meeting-scheduling/meeting-scheduling.component';

const routes: Routes = [
  {
    path: 'clients',
    component: ClientManagementComponent
  },
  {
    path: 'meetings',
    component: MeetingSchedulingComponent
  },
  {
    path: '',
    redirectTo: '/clients',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
