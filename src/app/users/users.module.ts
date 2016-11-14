import {NgModule} from "@angular/core";
import {UsersComponent} from "./users.component";
import {CommonModule} from "@angular/common";
import {FormsModule} from '@angular/forms';

@NgModule(({
    declarations:[UsersComponent],
    exports:[UsersComponent, FormsModule],
    imports:[CommonModule]
}))

export class UsersModule{}