import { Component } from '@angular/core';

@Component({
    selector: 'app-task2',
    templateUrl: './task2.component.html',
    styleUrls: ['./task2.component.css']
})
export class Task2Component {
    products: {
        Name: string,
        Price: number,
        Qty: number,
        ImageURL: string
    }[] = [
        {
            Name: 'Product A',
            Price: 300,
            Qty: 5,
            ImageURL: 'assets/Images/1.jpg'
        },
        {
            Name: 'Product B',
            Price: 200,
            Qty: 0,
            ImageURL: 'assets/Images/2.jpg'
        },
        {
            Name: 'Product C',
            Price: 700,
            Qty: 1,
            ImageURL: 'assets/Images/3.jpg'
        }
    ]
}
