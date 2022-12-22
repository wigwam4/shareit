import { useState } from 'react';
import { ImageBox } from '../components/ImageBox';
import { AlertBox } from '../components/AlertBox';
import { NoticeText } from '../components/NoticeText';
import { ContentTitle } from '../elements/Title';
import { Button } from '../elements/Button';
import { Label } from '../elements/Label';
import module from './ReviewLists.module.css';

const ReviewLists = ({ ReviewData, AvailableData }) => {
	const [index, setIndex] = useState(0);
	const sortData = [
		{
			id: 0,
			type: '작성가능 후기',
			count(){
				return (
					AvailableData.length
				)
			}
		},
		{
			id: 1,
			type: '작성한 후기',
			count(){
				return (
					ReviewData.length
				)
			}
		}
	]

	return (
		<>
			<ContentTitle>후기 상세</ContentTitle>
			<ul className={ module.review_list }>
				{ReviewData.map((datum)=>(
					<li key={ datum.seq }>
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
										<Label blue>{ datum.product.productType }</Label>
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
						<Button secondary lg w100>후기 쓰기</Button>
					</li>
				))}
			</ul>
			<NoticeText>
				고객님의 이용후기를 사진으로<br />
				다양하게 표현해 보세요!
			</NoticeText>
			<AlertBox>
				서비스 이용과 무관하거나 저작권 침해, 욕설, 광고, 음란, 불법적인 후기는 통보 없이 삭제 및 적립 혜택이 회수 될 수 있습니다.
			</AlertBox>
		</>
	)
}

export default ReviewLists;