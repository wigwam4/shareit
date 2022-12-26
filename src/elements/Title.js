import styled from 'styled-components';

const ContentTitle = styled.h2`
    padding-top: 10px; padding-bottom: 20px;
    color: #232323; font-size: 2.4rem; font-weight: 500; line-height: 1.416em;
    border-bottom: 1px solid #000;
    @media screen and (max-width:1024px){
        display: none;
        // padding: 18px;
        // font-size: 2.2rem;
    }
`

export { ContentTitle };