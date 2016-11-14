import {Component} from '@angular/core';

@Component({
    selector:'app-contact',
    template: `
    <div class="contact">
    <h2>Maciej Kamela</h2>
    <hr>
    <span>tel: 505 529 486</span>
    <span>e-mail: maciej.kamela@wp.pl</span>
</div>        
`
})

export class ContactComponent {
    constructor() {}
}