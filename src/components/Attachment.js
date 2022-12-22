import styled from 'styled-components';
import { ImageBox } from './ImageBox';
import BgAttachFileOuter from '../assets/images/bg_attachfile.png';
import BgFileDel from '../assets/images/btn_delete.png';
import BgFileDelMb from '../assets/images/btn_delete_mb.png';

const AttachFileOuter = styled.div`
    display: inline-block;
    vertical-align: top;
    input {
        display: none;
    }
    label {
        display: block;
        width: 180px; height: 180px;
        font-size: 0; line-height: 0;
        background: #F4F5F6 url(${ BgAttachFileOuter }) no-repeat center;
        border: 1px dashed #D8DEE5;
        border-radius: 8px;
        @media screen and (max-width:480px){
            width: 98px; height: 98px;
            background-size: 30px;
        }
    }
`
const FileAttached = styled.div`
    position: relative;
    display: inline-block;
    width: 180px; height: 180px; 
    vertical-align: top;
    @media screen and (max-width:480px){
        width: 98px; height: 98px;
    }
    div {
        height: 100%;
        background: #F4F5F6;
        border-radius: 8px;
    }
`
const BtnDel = styled.button`
    position: absolute; top: -12px; right: -12px;
    display: block;
    width: 42px; height: 42px;
    background: #fff url(${ BgFileDel }) no-repeat center;
    border: 1px solid #BEC2C8;
    border-radius: 50%;
    @media screen and (max-width:480px){
        top: -8px; right: -8px;
        width: 24px; height: 24px;
        background-image: url(${ BgFileDelMb });
    }
`

const AttachFile = () => {
  return (
    <AttachFileOuter>
        <input id='attach_file' type='file' />
        <label htmlFor='attach_file'>파일첨부</label>
    </AttachFileOuter>
  )
}


export { AttachFile, FileAttached, BtnDel };