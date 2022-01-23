import { App } from './App';
import { Calculator } from './Calculator';
import { IStore } from '../types/types';
import { makeAutoObservable } from 'mobx';

class Store implements IStore {
    calculator: Calculator;
    appState: App;
    constructor() {
        makeAutoObservable(this);
        this.calculator = new Calculator();
        this.appState = new App();
    }
}

export default new Store();
