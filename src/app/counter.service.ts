import { OnInit } from '@angular/core';

export class CounterService implements OnInit {
    private activeToInactiveCount : number = 0;
    private inactiveToActiveCount : number = 0;

    ngOnInit() {
        this.activeToInactiveCount = 0;
        this.inactiveToActiveCount = 0;
    }

    increaseSetToactive() {
        this.inactiveToActiveCount++;
        console.log("number of times set to active " + this.inactiveToActiveCount);
    }

    increaseSetToInactive() {
        this.activeToInactiveCount++;
        console.log("number of times set to inactive "+ this.activeToInactiveCount);
    }
}