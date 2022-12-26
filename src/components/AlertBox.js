import styled from 'styled-components';
import IconAlertBox from '../assets/images/icon_alertbox.svg';

const AlertBox = styled.p`
    padding: 10px 10px 10px 32px;
    color: #5E5E5E; font-size: 1.3rem; line-height: 1.461em;
    background: #F8F9FB url(${ IconAlertBox }) no-repeat left 12px top 12px; background-size: 14px;
    border-radius: 4px;
    @media screen and (max-width:1024px){
        margin: 0 24px;
    }
    @media screen and (max-width:480px){
        margin: 0 18px;
    }
`

export { AlertBox };