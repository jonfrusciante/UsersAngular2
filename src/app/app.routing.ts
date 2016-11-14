import {ModuleWithProviders} from  '@angular/core';
import {RouterModule, Routes, ActivatedRoute}   from '@angular/router';
import {SearchFormComponent} from './search-form/search-form.component';
import {UsersComponent} from "./users/users.component";
import {HomeComponent} from "./home/home.component";
import {DashboardComponent}  from './dashboard/dashboard.component';
import {ContactComponent} from "./conctact/contact.component";
import {UserDetailsComponent} from "./userDetails/user-details.component";
import {NewUserComponent} from "./addNewUser/new-user.component";

const routs: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'users', component: UsersComponent},
    {path: 'home', component: HomeComponent},
    {path: 'dashboards', component: DashboardComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'user/:id', component: UserDetailsComponent},
    {path: 'user/new', component: NewUserComponent}
    // { path: '**', component: PageNotFoundComponent }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(routs);
