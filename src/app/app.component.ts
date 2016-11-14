import {Component, Inject} from '@angular/core';

@Component({
    selector: 'user-list',
    template: `
 <app-home></app-home>
    <router-outlet></router-outlet>
    `
})

export class Users {
    headingTitle: string = 'User list';
    constructor() {
    }


}
