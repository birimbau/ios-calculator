import { ICalculator, Operation } from '../types/types';
import { action, makeObservable, observable, runInAction } from 'mobx';

import { calculate } from '../services/calculator.service';

export class Calculator implements ICalculator {
    value: number = undefined;
    displayValue = '0';
    operator: Operation = undefined;
    leftNumber = '';
    rightNumber = '';

    constructor() {
        makeObservable(this, {
            value: observable,
            displayValue: observable,
            clearAll: action,
            sign: action,
            percentage: action,
            computeOperation: action,
            setNumber: action,
        });
    }

    clearAll() {
        this.value = undefined;
        this.displayValue = '0';
        this.operator = undefined;
        this.leftNumber = '';
        this.rightNumber = '';
    }

    sign() {
        const signConversion = parseFloat(this.displayValue) * -1;
        this.displayValue = String(signConversion);
        this.forceNumber(String(signConversion));
    }

    percentage() {
        const input = parseFloat(this.displayValue);
        const conversion = this.displayValue.replace(/^-?\d*\.?/, '');
        const inputPercentage = input / 100;

        if (input === 0) return;
        const value = String(inputPercentage.toFixed(conversion.length + 2));

        this.forceNumber(value);
    }

    setNumber(value: string) {
        if (value === '.' && this.displayValue.indexOf('.') === -1) {
            value = `${this.displayValue}.`;
        } else if (value === '.' && this.displayValue.indexOf('.') !== -1) {
            return;
        }

        if (this.operator) {
            this.rightNumber =
                this.rightNumber === '' && value === '0'
                    ? ''
                    : this.rightNumber + value;
            runInAction(() => {
                this.displayValue = String(this.rightNumber || '0');
            });
        } else {
            this.leftNumber =
                this.leftNumber === '' && value === '0'
                    ? ''
                    : this.leftNumber + value;
            runInAction(() => {
                this.displayValue = String(this.leftNumber || '0');
            });
        }
    }

    async computeOperation(operator: Operation) {
        if (this.operator === Operation.DIVISION && this.rightNumber === '0') {
            alert(`Can't divide by zero`);
            return;
        }

        this.sanitizeValue();

        switch (operator) {
            case Operation.DIVISION:
            case Operation.MINUS:
            case Operation.PLUS:
            case Operation.MULTIPLY:
                this.operator = operator;
                break;
        }

        if (this.leftNumber && this.rightNumber && this.operator) {
            await this.performCalculation();
        }
    }

    async performCalculation() {
        const result = await calculate(
            this.operator,
            +this.leftNumber,
            +this.rightNumber
        );
        runInAction(() => {
            this.value = result;
            this.displayValue = String(result);
            this.leftNumber = String(result);
            this.rightNumber = '';
            this.operator =
                this.operator === Operation.EQUAL ? undefined : this.operator;
        });
        return result;
    }

    private forceNumber(value: string) {
        if (this.operator) {
            this.rightNumber = value;
            runInAction(() => {
                this.displayValue = this.rightNumber;
            });
        } else {
            this.leftNumber = value;
            runInAction(() => {
                this.displayValue = this.leftNumber;
            });
        }
    }

    private sanitizeValue() {
        this.leftNumber = this.leftNumber.replace(/\.$/, '');
        this.rightNumber = this.rightNumber.replace(/\.$/, '');

        if (this.operator) {
            runInAction(() => {
                this.displayValue = this.rightNumber || this.displayValue;
            });
        } else {
            runInAction(() => {
                this.displayValue = this.leftNumber || this.displayValue;
            });
        }
    }
}
