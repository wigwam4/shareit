import styled, { css } from 'styled-components';

const Textarea = styled.textarea`
    display: block;
    padding: 12px 14px;
    width: 100%;
    color: #5E5E5E; font-family: NotoSansCJK, sans-serif; font-size: 1.5rem; line-height: 1.466em;
    border: 1px solid #D8DEE5;
    border-radius: 4px;
    outline: none;
    resize: none;

    ::placeholder {
        color: #BEC2C8
    }
`  

export { Textarea };