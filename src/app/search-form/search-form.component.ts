import {Component, OnInit, ViewChild} from '@angular/core';
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/combineLatest";
import "rxjs/add/operator/filter";

@Component({
    selector: 'app-search-form',
    templateUrl: './searchFormTemplate.html',
    styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent {
    @ViewChild('formRef') form;

    showFormValue(value:any): void {
        console.log('Form value: ' + value);
    }
    ngAfterViewInit() {
        Observable.combineLatest(
            this.form.statusChanges,
            this.form.valueChanges,
            (status, value) => ({status, value})
        )
            .filter(({status}) => status === 'VALID')
            .subscribe(({value}) => console.table(value))
    }

    constructor() {}

    ngOnInit() {
    }
}
