import { device } from '../../styles/theme';
import styled from 'styled-components';

export const CalculatorStyles = styled('div')`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .grid-container {
        background-color: ${(props) => props.theme.body};
        display: grid;
        grid-template-columns: repeat(4, 65px);
        grid-template-rows: repeat(6, 65px);
        gap: 10px;
        grid-template-areas:
            'disp disp disp disp'
            'clear sign percentage division'
            'seven eight nine multiply'
            'four five six minus'
            'one two three plus'
            'zero zero dot equal';

        .display {
            grid-area: disp;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            font-size: 2rem;
            padding-right: 3vw;
            color: ${(props) => props.theme.fonts.colorPrimary};
        }

        .one {
            grid-area: one;
        }

        .two {
            grid-area: two;
        }

        .three {
            grid-area: three;
        }

        .four {
            grid-area: four;
        }

        .five {
            grid-area: five;
        }

        .six {
            grid-area: six;
        }

        .seven {
            grid-area: seven;
        }

        .eight {
            grid-area: eight;
        }

        .nine {
            grid-area: nine;
        }

        .zero {
            grid-area: zero;
        }

        .dot {
            grid-area: dot;
        }

        .disabled {
            pointer-events: none;
            background-color: papayawhip;
            color: papayawhip;
        }

        &.pending {
            cursor: wait;
        }

        @media ${device.tablet} {
            grid-template-columns: repeat(4, 130px);
            grid-template-rows: repeat(6, 130px);
            .display {
                padding-right: 41px;
                font-size: 112px;
            }
            .key {
                font-size: 64px;
            }
        }
    }
`;
