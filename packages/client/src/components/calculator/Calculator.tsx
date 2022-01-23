import Button from '../button/Button';
import { CalculatorStyles } from './Calculator.styles';
import { States } from '../../store/App';
import { displayFormatted } from '../../utils/utils';
import { observer } from 'mobx-react';
import store from '../../store/Store';
import { useCalculatorDefinition } from './useCalculatorDefiniton';

const Calculator = () => {
    const calculatorDefinitons = useCalculatorDefinition(store);

    return (
        <CalculatorStyles>
            <section
                data-test="calculator-app"
                className={[
                    'grid-container',
                    store.appState.state === States.PENDING ? 'pending' : '',
                ].join(' ')}
            >
                <div data-test="display" className="display">
                    {displayFormatted(store.calculator.displayValue)}
                </div>

                {calculatorDefinitons.map((key) => (
                    <div className={key.className} key={key.content}>
                        <Button
                            type={key.type}
                            dataTest={key.dataTest}
                            content={key.content}
                            pending={store.appState.state === States.PENDING}
                            onClick={(e) => {
                                if (store.appState.state === States.PENDING) {
                                    return;
                                }
                                key.onClick(e);
                            }}
                            double={key.double}
                        ></Button>
                    </div>
                ))}
            </section>
        </CalculatorStyles>
    );
};
export default observer(Calculator);
