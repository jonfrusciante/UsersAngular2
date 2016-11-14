import {Injectable}     from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {User} from './users.model';
import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()

export class UsersService {
    private usersUrl = 'http://localhost:3000/users';
    private headers = new Headers({'Content-Type': 'application/json'});

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    constructor(public http: Http) {
    }

    /*
     ** Get users with Observable approach
     */
    getUsersWithObservable(): Observable<User[]> {
        return this.http.get(this.usersUrl)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    /*
     ** Get users with Promise approach
     */
    getUsersWithPromise(): Promise<User[]> {
        return this.http.get(this.usersUrl)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    getUser(id: number): Promise<User> {
        let user = this.getUsersWithPromise()
            .then((users) => {
                users.find((user) => {
                    return user.id === id;
                });
            });
        return user;
    }


    removeUserWithObservable(id: string): Observable<User[]> {
        return this.http.delete(`$(this.usersUrl)/$(id)`)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    removeUserWithPromise(id: number): Promise<void> {
        const url = `${this.usersUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    updateWithPromise(user: User): Promise<User> {
        const url = `${this.usersUrl}/${user.id}`;
        return this.http
            .put(url, JSON.stringify(user), {headers: this.headers})
            .toPromise()
            .then(() => {
                    console.log(user);
                    user;
                }
            )
            .catch(this.handleError);
    }

}