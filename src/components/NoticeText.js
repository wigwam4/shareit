import styled from 'styled-components';

const NoticeText = styled.p`
    display: flex;
    padding: 72px 10px;
    justify-content: center; align-items: center;
    color: #BEC2C8; font-size: 2rem; line-height: 1.45em; text-align: center;
    @media screen and (max-width:480px){
        font-size: 1.6rem;
    }
`

export { NoticeText };