import { ImageBox } from './ImageBox';
import { AlertBox } from './AlertBox';
import { NoticeText } from './NoticeText';
import { Button } from '../elements/Button';
import { Label } from '../elements/Label';
import module from './ReviewAvailable.module.css';

const ReviewAvailable = ({ AvailableData }) => {
	return (
		<>
			<ul className={ module.review_list }>
				{AvailableData.map((item)=>(
					<li key={ item.seq }>
						<div className={ module.data_box }>
							<div className={ module.data_toparea }>
								<ImageBox className={ module.img_box }>
									<img src={ item.product.hostImage } alt={ item.product.productName } />
								</ImageBox>
								<p>
									<strong>{ item.product.hostName }</strong>
									{ item.product.spaceName }
								</p>
							</div>
							<dl>
								<div>
									<dt>상품명</dt>
									<dd>
										<Label blue style={{ marginRight: '10px' }}>{ item.product.productType }</Label>
										{ item.product.productName }
									</dd>
								</div>
								<div>
									<dt>예약일자</dt>
									<dd>
										{ item.review.reserveAt }
									</dd>
								</div>
								<div>
									<dt>작성기한</dt>
									<dd>
										{ item.review.deadLine }
									</dd>
								</div>
							</dl>
						</div> 
						<Button secondary xl w100>후기 쓰기</Button>
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

export default ReviewAvailable;