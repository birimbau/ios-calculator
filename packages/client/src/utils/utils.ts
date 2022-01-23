import { Operation } from '../types/types';
import Store from '../store/Store';

export const displayFormatted = (inputValue: string) => {
    const convertedNumber = inputValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return convertedNumber;
};

export const operations = (operator: string, prev: number, next: number) => {
    if (operator === '+') return prev + next;
    if (operator === '-') return prev - next;
    if (operator === '×') return prev * next;
    if (operator === '÷') return prev / next;
    if (operator === '=') return next;
    return;
};

export const handleNumbers = (e: React.MouseEvent) => {
    const event = e.target as HTMLElement;
    const value = event.innerText;
    Store.calculator.setNumber(value);
};

export const handleOperators = (e: React.MouseEvent) => {
    const event = e.target as HTMLElement;
    Store.calculator.computeOperation(event.innerText as Operation);
};
