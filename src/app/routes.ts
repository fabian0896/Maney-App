import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';
import { GuardGuard } from './services/guard.guard';


const appRoutes:Routes =[
    {path:'login', component: LoginComponent },
    {path: 'home', component: HomeComponent, canActivate: [GuardGuard]},
    {path: 'details/:id', component:DetailsComponent, canActivate: [GuardGuard] },
    {path: '**', pathMatch: 'full', redirectTo: 'home', canActivate: [GuardGuard]}
];

export const ROUTES = RouterModule.forRoot(appRoutes);