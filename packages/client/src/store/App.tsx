import { makeObservable, observable } from 'mobx';

import { IApp } from '../types/types';

export enum States {
    PENDING = 'pending',
    ERROR = 'error',
    NORMAL = 'normal',
}
export class App implements IApp {
    state = States.NORMAL;

    constructor() {
        makeObservable(this, {
            state: observable,
        });
    }
}
