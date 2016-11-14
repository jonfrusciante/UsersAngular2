import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
// import {RouterModule, Routes, ActivatedRoute}   from '@angular/router';
import {appRouting} from "./app.routing"
import {UsersService} from './users/users.service';
import {Users} from './app.component';
import {SearchFormComponent} from './search-form/search-form.component';
import {CommonModule} from "@angular/common";
import {UsersComponent} from "./users/users.component";
import {HomeComponent} from "./home/home.component";
import {DashboardComponent}  from './dashboard/dashboard.component';
import {ContactComponent} from "./conctact/contact.component";
import {ContactModule} from "./conctact/contact.module";
import {UserDetailsComponent} from "./userDetails/user-details.component";
import {NewUserComponent} from "./addNewUser/new-user.component";

@NgModule({
    declarations: [
        Users,
        SearchFormComponent,
        DashboardComponent,
        UserDetailsComponent,
        UsersComponent,
        HomeComponent,
        ContactComponent,
        NewUserComponent

    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        CommonModule,
        appRouting
    ],
    // exports: [RouterModule],
    providers: [UsersService],

    bootstrap: [Users]
})
export class AppModule {
}
