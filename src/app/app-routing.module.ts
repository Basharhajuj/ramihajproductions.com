  import { NgModule } from '@angular/core';
  import { RouterModule, Routes } from '@angular/router';
  import { ServicesComponent } from './services/services.component';
  import { HomeComponent } from './home/home.component';
  import { ReelsComponent } from './reels/reels.component';
  import { AdminReelsPageComponent } from './admin-reels-page/admin-reels-page.component';
  import { ReelsDetailsComponent } from './reels-details/reels-details.component';
  import { VfxComponent } from './vfx/vfx.component';
  import { VfxAdminComponent } from './vfx-admin/vfx-admin.component';
  import { AdminComponent } from './admin/admin.component';
  import { ProjectsComponent } from './projects/projects.component';
  import { AdminLoginComponent } from './admin-login/admin-login.component';
  import { AuthGuard } from './service/auth.guard';
  import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
  
  const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'reels/:category', component: ReelsDetailsComponent },
    { path: 'vfx', component: VfxComponent },
    { path: 'admin-login', component: AdminLoginComponent },

    {
      path: 'admin',
      component: AdminComponent,canActivate: [AuthGuard],
      children: [
        { path: 'reels', component: AdminReelsPageComponent },
        { path: 'vfx', component: VfxAdminComponent }, 
        { path: '', redirectTo: 'reels', pathMatch: 'full' }, // Default to 'reels' when /admin is accessed
      ]
    },
    { path: 'projects', component: ProjectsComponent },
    { path: 'services', component: ServicesComponent },  
    { path: 'reels', component: ReelsComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {path: '**', component: PageNotFoundComponent}
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
