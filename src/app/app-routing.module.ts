import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './_pages/profile/profile.component';
import { TaskComponent } from './_components/task/task.component';
import { SocketComponent } from './_components/socket/socket.component';
const routes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'task',
    component: TaskComponent,
  },
  {
    path: 'socket',
    component: SocketComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
