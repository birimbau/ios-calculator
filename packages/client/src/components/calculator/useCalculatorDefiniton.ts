import { IStore, Operation } from '../../types/types';
import { handleNumbers, handleOperators } from '../../utils/utils';

import { ButtonType } from '../button/Button';
import { action } from 'mobx';

export const useCalculatorDefinition = (store: IStore) => {
    return [
        {
            className: 'dot',
            content: '.',
            dataTest: 'numeric-dot',
            type: ButtonType.NUMERIC,
            onClick: action((e: React.MouseEvent) => handleNumbers(e)),
        },
        {
            className: 'zero',
            content: '0',
            double: true,
            dataTest: 'numeric-zero',
            type: ButtonType.NUMERIC,
            onClick: action((e: React.MouseEvent) => handleNumbers(e)),
        },
        {
            className: 'one',
            content: '1',
            dataTest: 'numeric-one',
            type: ButtonType.NUMERIC,
            onClick: action((e: React.MouseEvent) => handleNumbers(e)),
        },
        {
            className: 'two',
            content: '2',
            dataTest: 'numeric-two',
            type: ButtonType.NUMERIC,
            onClick: action((e: React.MouseEvent) => handleNumbers(e)),
        },
        {
            className: 'three',
            content: '3',
            dataTest: 'numeric-three',
            type: ButtonType.NUMERIC,
            onClick: action((e: React.MouseEvent) => handleNumbers(e)),
        },
        {
            className: 'four',
            content: '4',
            dataTest: 'numeric-four',
            type: ButtonType.NUMERIC,
            onClick: action((e: React.MouseEvent) => handleNumbers(e)),
        },
        {
            className: 'five',
            content: '5',
            dataTest: 'numeric-five',
            type: ButtonType.NUMERIC,
            onClick: action((e: React.MouseEvent) => handleNumbers(e)),
        },
        {
            className: 'six',
            content: '6',
            dataTest: 'numeric-six',
            type: ButtonType.NUMERIC,
            onClick: action((e: React.MouseEvent) => handleNumbers(e)),
        },
        {
            className: 'seven',
            content: '7',
            dataTest: 'numeric-seven',
            type: ButtonType.NUMERIC,
            onClick: action((e: React.MouseEvent) => handleNumbers(e)),
        },
        {
            className: 'eight',
            content: '8',
            dataTest: 'numeric-eight',
            type: ButtonType.NUMERIC,
            onClick: action((e: React.MouseEvent) => handleNumbers(e)),
        },
        {
            className: 'nine',
            content: '9',
            dataTest: 'numeric-nine',
            type: ButtonType.NUMERIC,
            onClick: action((e: React.MouseEvent) => handleNumbers(e)),
        },
        {
            className: 'clear',
            content: 'AC',
            dataTest: 'function-clear',
            type: ButtonType.FUNCTION,
            onClick: () => store.calculator.clearAll(),
        },
        {
            className: 'sign',
            content: '±',
            dataTest: 'numeric-sign',
            type: ButtonType.FUNCTION,
            onClick: () => store.calculator.sign(),
        },
        {
            className: 'percentage',
            content: '%',
            dataTest: 'function-percentage',
            type: ButtonType.FUNCTION,
            onClick: () => store.calculator.percentage(),
        },
        {
            className: 'division',
            content: Operation.DIVISION,
            dataTest: 'operation-division',
            type: ButtonType.OPERATION,
            onClick: (e: React.MouseEvent) => handleOperators(e),
        },
        {
            className: 'multiply',
            content: Operation.MULTIPLY,
            dataTest: 'operation-multiply',
            type: ButtonType.OPERATION,
            onClick: (e: React.MouseEvent) => handleOperators(e),
        },
        {
            className: 'minus',
            content: Operation.MINUS,
            dataTest: 'operation-minus',
            type: ButtonType.OPERATION,
            onClick: (e: React.MouseEvent) => handleOperators(e),
        },
        {
            className: 'plus',
            content: Operation.PLUS,
            dataTest: 'operation-plus',
            type: ButtonType.OPERATION,
            onClick: (e: React.MouseEvent) => handleOperators(e),
        },
        {
            className: 'equal',
            content: Operation.EQUAL,
            dataTest: 'operation-equal',
            type: ButtonType.OPERATION,
            onClick: (e: React.MouseEvent) => handleOperators(e),
        },
    ];
};
