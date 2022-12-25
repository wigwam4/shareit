import styled from 'styled-components';

const ImageBox = styled.div`
    display: flex;
    justify-content: center; align-item: center;
    overflow: hidden;
    
    img {
        object-fit: cover;
    }
`

export { ImageBox };