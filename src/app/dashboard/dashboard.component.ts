import {Component} from '@angular/core';

@Component({
    selector: 'app-dashboard',
    template: `
    <div class="dashboard-container">
        <div class="dashboard">hello I am a dashboard component</div>   
        <ul>
            <li class="person" *ngFor="let p of persons" (click)="selectPerson(p)" [class.selected]="p===selectedPerson" [style.background]="p.isChecked ? 'grey' : 'lime' ">
                {{p.name}} {{p.surname}}
                <i>{{p.mobile}}</i>
            </li>
         </ul>
    <div class="jumbotron" *ngIf="selectedPerson">
        <h2>{{selectedPerson.name}}<small>{{selectedPerson.surname}}</small></h2>
        <input type="text" class="form-control" [(ngModel)]="selectedPerson.surname"/>
    </div>
</div>
`,
    styleUrls: ['./dashboard.css']
})

export class DashboardComponent {
    selectedPerson: Object;
    isSelected: boolean = false;
    constructor() {
    }

    persons: Object[] = [
        {
            "id": 0,
            "name": "Angela",
            "surname": "Williams",
            "dateOb": "06/12/1970",
            "mobile": "7-(991)116-5310",
            "address": "3 Schiller Pass",
            "isChecked": false
        },
        {
            "id": 1,
            "name": "Sarah",
            "surname": "Medina",
            "dateOb": "02/06/1943",
            "mobile": "351-(952)362-2163",
            "address": "74789 Sutteridge Way",
            "isChecked": false
        },
        {
            "id": 2,
            "name": "Johnny",
            "surname": "Cooper",
            "dateOb": "21/08/1961",
            "mobile": "223-(840)663-7687",
            "address": "5757 Eliot Avenue",
            "isChecked": false
        },
        {
            "id": 3,
            "name": "Jose",
            "surname": "Daniels",
            "dateOb": "27/04/1987",
            "mobile": "81-(642)429-8376",
            "address": "1 Manley Crossing",
            "isChecked": false
        }
    ];

    selectPerson(person) {
        this.selectedPerson = person;
        person.isChecked = !person.isChecked;
        console.log(this.selectedPerson);
    };
}