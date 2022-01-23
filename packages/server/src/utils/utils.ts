import { Operation } from '../model/calculator';

export const operations = (operator: Operation, prev: number, next: number) => {
    let result;
    switch (operator) {
        case Operation.PLUS:
            result = prev + next;
            break;
        case Operation.MINUS:
            result = prev - next;
            break;
        case Operation.MULTIPLY:
            result = prev * next;
            break;
        case Operation.DIVISION:
            result = prev / next;
            break;
        case Operation.EQUAL:
            result = next;
        default:
            return;
    }

    return Math.round(result * 100) / 100;
};
