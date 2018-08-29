import {Component} from "@angular/core";

@Component({
    selector: 'pm-root',
    template: `<div>
                    <h1>{{pageTitle}}</h1>
                        <div>My First Component</div>
                </div>
                `
})
export class AppComponent {
    // Be sure to set a Data type for each property
    pageTitle: string = 'Acme Product Management';
}