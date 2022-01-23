import { App } from '../store/App';
import { Calculator } from '../store/Calculator';

export interface ICalculator {
    value?: number;
    displayValue: string;
    operator?: string;
}

export interface IApp {
    state: string;
}

export interface IStore {
    calculator: Calculator;
    appState: App;
}

export enum Operation {
    DIVISION = '÷',
    MULTIPLY = '×',
    MINUS = '-',
    PLUS = '+',
    EQUAL = '=',
}
