import {Component, Input, OnInit} from "@angular/core";
import {ActivatedRoute, Params}   from '@angular/router';
import {Location}                 from '@angular/common';
import {User} from '../users/users.model';
import {UsersService} from '../users/users.service';

@Component({
    selector: 'app-user-details',
    template: `
       <div class="user-details-container">
        <div *ngIf="user">
            <h2>{{user.name}} details!</h2>
        <div><label> id:</label>{{user.id}}</div>
            <div>
                <label>name:</label>
            </div>
         </div> 
            <button (click)="goBack()">Back</button>
        </div>
    `,
    styleUrls: ['./user-details.css']
})

export class UserDetailsComponent implements OnInit {
    user: User;
    userId;

    constructor(private usersService: UsersService,
                private route: ActivatedRoute,
                private location: Location) {
    }

    goBack(): void {
        this.location.back();
    }

    // ngOnInit(): void {
    //     this.route.params.forEach((params: Params) => {
    //         let id = +params['id'];
    //         console.log(id);
    //         this.usersService.getUser(id)
    //             .then((user) => {
    //                 console.log(user, 'user details');
    //                 this.user = user;
    //             })
    //     });
    // }

    ngOnInit() {
        //     let userId = this.route.snapshot.params['id'];
        //     console.log(userId, 'xxxxx');
        this.route.params.subscribe(params => {
            this.userId = params['id'];
            this.usersService.getUser(this.userId)
                .then((user) => {
                    console.log(user, 'user details', this.userId);
                    this.user = user;
                })
        });

    }

}

