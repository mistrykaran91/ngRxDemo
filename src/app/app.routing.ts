import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "member",
    loadChildren: "./member/member.module#MemberModule"
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
