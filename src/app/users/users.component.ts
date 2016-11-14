import {Component, OnInit, Input} from '@angular/core';
import {User} from './users.model';
import {UsersService} from './users.service';
import {ActivatedRoute, Params}   from '@angular/router';
import {Location}                 from '@angular/common';
import {Observable} from 'rxjs/Observable';
@Component({
    selector: 'app-users',
    templateUrl: 'usersList.html',
    styleUrls: ['./usersList.css']
})
export class UsersComponent implements OnInit {
    users: User[];
    user: User;
    url: string = 'http://localhost:3000/';
    isHidden: boolean = true;
    editingUsers = {};
    activeUser: User;
    headingTitle: string = 'User list';
    isDisabled: boolean = true;
    usersAmount: number;

    constructor(private usersService: UsersService,
                private route: ActivatedRoute,
                private location: Location) {
    }

    /*
     ** load users using Observable
     */

    loadUsersWithObservable() {
        this.usersService.getUsersWithObservable()
            .subscribe(
                users => this.users = users,
                err => {
                    console.log(err);
                });
    }

    /*
     ** load users using Promises
     */
    loadUsersWithPromise() {
        this.usersService.getUsersWithPromise()
            .then(users => this.users = users);
    }

    ngOnInit() {
        this.loadUsersWithPromise();
        this.countUsers()
    }

    deleteUserWithPromise(user: User): void {
        this.usersService
            .removeUserWithPromise(user.id)
            .then(() => {
                this.users = this.users.filter(u => u !== user);
                this.usersAmount = this.users.length;
                if (this.activeUser === user) {
                    this.activeUser = null;
                }
            });
    }

    editUser(user: User): void {
        this.activeUser = user;
        this.editingUsers[user.id] = true;
        this.isDisabled = false;
        console.log(this.activeUser, 'active user');
        console.log(this.editingUsers, 'editing users');
    }

    goBack(): void {
        this.location.back();
    }

    saveWithPromise(): void {
        if (this.activeUser) {
            this.usersService.updateWithPromise(this.activeUser);
            this.goBack();
            this.isDisabled = true;
        }
    };

    countUsers(): number {
        this.usersService.getUsersWithPromise()
            .then((users) => {
                this.usersAmount = users.length;
            });
        return this.usersAmount;
    }
}
