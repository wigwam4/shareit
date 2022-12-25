import styled, { css } from 'styled-components';

const Label = styled.span`
    display: inline-flex;
    padding: 0 4px;
    justify-content: center; align-items: center;
    height: 18px;
    font-size: 1rem; font-weight: 500; vertical-align: middle;

    ${props => props.blue && css`
        color: #fff;
        background: #0077ed;
    `}
`
const LabelOutline = styled(Label)`
    height: 20px;
    font-size: 1.2rem;
    border-width: 1px; border-style: solid;

    ${props => props.red && css`
        color: #f93737; 
        border-color: #F93737;
    `}
`

export { Label, LabelOutline };