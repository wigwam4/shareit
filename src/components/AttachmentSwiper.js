import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import styled from 'styled-components';
import BgAttachFileOuter from '../assets/images/bg_attachfile.svg';
import BgFileDel from '../assets/images/btn_delete.svg';
import { ImageBox } from "./ImageBox";

const SwiperWrapper = styled(Swiper)`
	@media screen and (max-width:1024px){
		padding-left: 24px;
	}
	@media screen and (max-width:480px){
		padding-left: 18px;
	}
`
const AttachFile = styled(SwiperSlide)`
    display: inline-block;
	margin-top: 20px;
	width: 180px; height: 180px;
    vertical-align: top;
	@media screen and (max-width:480px){
		width: 98px; height: 98px;
	}
    input {
        display: none;
    }
    label {
        display: block;
        height: 100%;
        font-size: 0; line-height: 0;
        background: #F4F5F6 url(${ BgAttachFileOuter }) no-repeat center; background-size: 40px;
        border: 1px dashed #D8DEE5;
        border-radius: 8px;
        cursor: pointer;
        @media screen and (max-width:480px){
            background-size: 30px;
        }
    }
`
const FileAttached = styled(SwiperSlide)`
	position: relative;
	display: inline-block;
	margin-top: 20px;
	width: 180px; height: 180px; 
	overflow: visible;
	@media screen and (max-width:480px){
		width: 98px; height: 98px;
	}
	div {
		height: 100%;
		vertical-align: top;
		background: #F4F5F6;
        border-radius: 8px;
	}
`
const BtnDel = styled.button`
    position: absolute; top: -12px; right: -12px;
    display: block;
    width: 42px; height: 42px;
    background: #fff url(${ BgFileDel }) no-repeat center; background-size: 18px;
    border: 1px solid #BEC2C8;
    border-radius: 50%;
    @media screen and (max-width:480px){
        top: -8px; right: -8px;
        width: 24px; height: 24px;
        background-size: 12px;
    }
`
const AttachmentSwiper = () => {
    return (
    <SwiperWrapper 
		freeMode={true}
		slidesPerView={'auto'}
        modules={[FreeMode]}
		spaceBetween={20}
        breakpoints={{
            480: {
                spaceBetween: 30,
            }
        }}
		className="mySwiper"
	>
        <AttachFile>
			<input id='attach_file' type='file' />
			<label htmlFor='attach_file' title='파일 첨부'>파일첨부</label>
		</AttachFile>
        <FileAttached>
			<ImageBox>
				<img src='' alt='' />
			</ImageBox>
			<BtnDel />
        </FileAttached>
        <FileAttached>
			<ImageBox>
				<img src='' alt='' />
			</ImageBox>
			<BtnDel />
        </FileAttached>
        <FileAttached>
			<ImageBox>
				<img src='' alt='' />
			</ImageBox>
			<BtnDel />
        </FileAttached>
        <FileAttached>
			<ImageBox>
				<img src='' alt='' />
			</ImageBox>
			<BtnDel />
        </FileAttached>
        <FileAttached>
			<ImageBox>
				<img src='' alt='' />
			</ImageBox>
			<BtnDel />
        </FileAttached>
    </SwiperWrapper>
    )
  }


export { AttachmentSwiper };