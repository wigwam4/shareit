import styled, { css } from 'styled-components';

const Button = styled.button`
    display: inline-flex; 
    justify-content: center; align-items: center;
    font-family: NotoSansCJK, sans-serif; font-weight: 500;
    border-width: 1px;
    border-style: solid;
    border-radius: 4px;
    transition: 0.3s;
    cursor: pointer;
    outline: none;
    
    ${props => props.primary && css`
        color: #fff;
        background: #0077ED;
        border-color: #0077ED;
        &:hover {
            background: #0061c1;
            border-color: #0061c1;
        }
    `}
    ${props => props.secondary && css`
        color: #677294;
        background: #fff;
        border-color: #d8dee5;
        &:hover {
            background: #F4F5F6;
            border-color: #F4F5F6;
        }
    `}
    ${props => props.xl && css`
        padding: 0 20px;
        min-width: 204px; height: 56px;     
        font-size: 1.8rem;
        @media screen and (max-width:1024px){
            height: 50px;
            font-size: 1.7rem;
        }
        @media screen and (max-width:480px){
            min-width: auto; height: 40px;
            font-size: 1.4rem;
        }
    `}
    ${props => props.lg && css`
        padding: 0 16px;
        min-width: 204px; height: 50px;     
        font-size: 1.8rem;
        @media screen and (max-width:480px){
            min-width: auto;
        }
    `}
    ${props => props.sm && css`
        padding: 0 11px;
        height: 30px;
        font-size: 1.3rem;
    `}
    ${props => props.w100 && css`
        width: 100%;
    `}
`

export { Button };