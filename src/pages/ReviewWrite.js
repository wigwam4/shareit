import { useParams } from 'react-router-dom';
import { Button } from '../elements/Button';
import { Label } from '../elements/Label';
import { Textarea } from '../elements/Textarea';
import { ContentTitle } from '../elements/Title';
import { ImageBox } from '../components/ImageBox';
import { AttachmentSwiper } from '../components/AttachmentSwiper';
import module from './ReviewWrite.module.css';

const ReviewWrite = ({ ReviewData }) => {
	let { id } = useParams();
	let datum;

	for (let i=0; i<ReviewData.length; i++){
		if (ReviewData[i].seq === Number(id)){
			datum = ReviewData[i];
		}
	}

	return (
		<>
			<form>
				<ContentTitle>후기 상세</ContentTitle>
				<div className={ module.btn_toparea }>
					<Button secondary sm>삭제</Button>
				</div>
				<div className={ module.data_box }>
					<div className={ module.data_toparea }>
						<ImageBox className={ module.img_box }>
							<img src={ datum.product.hostImage } alt={ datum.product.productName } />
						</ImageBox>
						<p>
							<strong>{ datum.product.hostName }</strong>
							{ datum.product.spaceName }
						</p>
					</div>
					<dl>
						<div>
							<dt>상품명</dt>
							<dd>
								<Label blue style={{ marginRight: '10px' }}>{ datum.product.productType }</Label>
								{ datum.product.productName }
							</dd>
						</div>
						<div>
							<dt>예약일자</dt>
							<dd>
								{ datum.review.reserveAt }
							</dd>
						</div>
					</dl>
				</div> 
				<div className={ module.review_section }>
					<p className={`${ module.review_question } ${ module.marked }`}>서비스 만족도를 선택해 주세요</p> 
					<div className={ module.starcount_wrap }>
						선택하세요
						<div className={ module.starcount_item }>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
						</div>
						<p className={ module.alert_message }>별점은 1점 이상이어야 합니다.</p>
					</div>
				</div>
				<div className={ module.review_section }>
					<p className={`${ module.review_question } ${ module.marked }`}>사용후기를 작성해 주세요 (6자 이상)</p>
					<Textarea
						rows={ 4 }
						minLength={ 6 }
						maxLength={ 10 }
						placeholder='서비스 이용과 무관하거나 저작권 침해, 욕설, 광고, 음란, 불법적인 후기는 통보 없이 삭제 및 적립 혜택이 회수 될 수 있습니다.'
					></Textarea>
					<div className={ module.tiptext_area }>
						<p className={ module.alert_message }>후기는 6자 이상 입력해 주세요.</p>
						<span className={ module.tiptext_right }>0/1,000</span>
					</div>
				</div>
				<div className={`${ module.review_section } ${ module.section_full }`}>
					<p className={ module.review_question } style={{ marginBottom: 0 }}>포토 첨부 (최대 5장)</p>
					<AttachmentSwiper />
					<div className={ module.tiptext_area }>
						<p className={ module.alert_message }>이미지 파일만 등록해 주세요.</p>
						<span className={ module.tiptext_right }>포토당 최대 15MB</span>
					</div>
				</div>
				<div className={ module.review_section }>
					<p className={ module.review_question }>판매자에게 전달하고 싶은 메시지</p>
					<Textarea
						rows={ 4 }
						minLength={ 6 }
						maxLength={ 10 }
						placeholder='서비스 이용과 무관하거나 저작권 침해, 욕설, 광고, 음란, 불법적인 후기는 통보 없이 삭제 및 적립 혜택이 회수 될 수 있습니다.'
					></Textarea>
					<div className={ module.tiptext_area }>
						<span className={ module.tiptext_right }>0/1,000</span>
					</div>
				</div>
				<p className={ module.checkbox }>
					<input id='agreement' type='checkbox' />
					<label htmlFor='agreement'>구매후기 약관 동의 (필수)</label>
				</p>
				<div className={ module.notice_box }>
					<strong className={ module.notice_title }>후기 등록 유의사항</strong>
					<ul className={ module.list_dot }>
						<li>후기 작성은 사용 완료 후 6 개월 이내 작성이 가능합니다.</li>
						<li>이미지는 최대 5 개까지 등록 가능하며, 이미지 개수와 상관없이 포인트는 1회만 지급됩니다.</li>
						<li>서비스 이용과 무관하거나 욕설, 광고, 음란, 저작권 침해 내용 등록 시 사전협의 없이 삭제할 수 있습니다.</li>
						<li>작성된 후기 및 사진은 쉐어잇 마케팅에 활용될 수 있습니다.</li>
						<li>고객이 등록하는 게시물로 인해 발생하는 분쟁에 대한 민사 형사 행정상 법적 책임은 게시자에 있고, 쉐어잇은 어떠한 책임도 부담하지 않습니다.</li>
					</ul>
				</div>
				<div className={ module.btn_area }>
					<Button secondary lg>취소</Button>
					<Button type='submit' primary lg>저장</Button>
				</div>
			</form>
		</>
	)
}

export default ReviewWrite;