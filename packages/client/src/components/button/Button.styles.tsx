import { device } from '../../styles/theme';
import styled from 'styled-components';

export const ButtonStyles = styled('div')`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 32px;
    cursor: pointer;
    aspect-ratio: 1;
    border-radius: 50%;
    height: 100%;
    width: 100%;

    &.double {
        border-radius: 70px;
        justify-content: left;
        padding-left: 25px;
    }

    &.pending {
        cursor: wait;
    }

    &:not(.pending):hover {
        opacity: 0.8;
    }

    &.numeric {
        color: ${(props) => props.theme.fonts.colorPrimary};
        background-color: ${(props) => props.theme.buttons.colorGray};

        &.disabled {
            pointer-events: none;
        }
    }

    &.function {
        color: ${(props) => props.theme.fonts.colorSecondary};
        background-color: ${(props) => props.theme.buttons.colorLightGray};
    }

    &.operation {
        color: ${(props) => props.theme.fonts.colorPrimary};
        background-color: ${(props) => props.theme.buttons.colorOrange};
    }

    @media ${device.mobileS} {
        font-size: 32px;
    }

    @media ${device.tablet} {
        font-size: 64px;

        &.double {
            padding-left: 46px;
        }
    }
`;
