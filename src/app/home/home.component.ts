import {Component} from "@angular/core";
@Component({
    selector: 'app-home',
    templateUrl: 'home.html',
    styleUrls: ['home.style.css']
})

export class HomeComponent {
    // homeItems = ['Home', 'Dashboards', 'Users', 'Contact'];
    homeItems = [
        {
            name:'Home',
            url:'/home',
            icon:'glyphicon glyphicon-home'
        },
        {
            name:'Dashboards',
            url:'/dashboards',
            icon: 'glyphicon glyphicon-dashboard'
        },
        {
            name:'Users',
            url:'/users',
            icon:'glyphicon glyphicon-user'
        },
        {
            name:'Contact',
            url:'/contact',
            icon:'glyphicon glyphicon-envelope'
        }
    ];

    constructor() {
    }
}