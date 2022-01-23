import { States } from '../store/App';
import Store from '../store/Store';
import { calculatorServiceRequest } from '..';
import { runInAction } from 'mobx';

export const calculate = async (
    operator: string,
    prevNumber: number,
    nextNumber: number
): Promise<number> => {
    runInAction(() => {
        Store.appState.state = States.PENDING;
    });

    const result: number = await calculatorServiceRequest.post('/calculator', {
        operator,
        prevNumber,
        nextNumber,
    });

    runInAction(() => {
        Store.appState.state = States.NORMAL;
    });

    return result;
};
