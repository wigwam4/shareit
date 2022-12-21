import styled, { css } from 'styled-components';

const Button = styled.button`
    display: inline-flex; 
    justify-content: center; align-items: center;
    border-width: 1px;
    border-style: solid;
    border-radius: 4px;
    outline: none;

    ${props => props.primary && css`
        color: #fff;
        background: #0077ED;
        border-color: #0077ED;
    `}
    ${props => props.secondary && css`
        color: #677294;
        background: #fff;
        border-color: #d8dee5;
    `}
    ${props => props.lg && css`
        padding: 0 16px;
        width: 204px; height: 50px;     
        font-size: 1.8rem; line-height: 1.444em;
    `}
    ${props => props.sm && css`
        padding: 0 11px;
        height: 30px;
        font-size: 1.3rem; font-weight: 500; line-height: 1.461em;
    `}
`

export { Button };