import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './landing/layout/layout.component';
import { JobsComponent } from './landing/jobs/jobs.component';
import { SavedjobsComponent } from './landing/jobs/savedjobs/savedjobs.component';
import { UserformComponent } from './landing/jobs/userform/userform.component';
import { AppliedjobsComponent } from './landing/jobs/appliedjobs/appliedjobs.component';
import { ProfileComponent } from './landing/jobs/profile/profile.component';
import { NotificationsComponent } from './landing/jobs/notifications/notifications.component';
const routes: Routes = [
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'',
    component:LayoutComponent,
    children:[
      {
        path:"jobs",
        component:JobsComponent
      },
      {
        path:"savedjobs",
        component:SavedjobsComponent
      },
      {
        path:"userform",
        component:UserformComponent
      },
      {
        path:"appliedjobs",
        component:AppliedjobsComponent
      },
      {
        path:"profile",
        component:ProfileComponent
      },
      {
        path:"notifications",
        component:NotificationsComponent
      }


    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
