import { useState } from 'react';
import { ImageBox } from './ImageBox';
import { Label, LabelOutline } from '../elements/Label';
import module from './ReviewDone.module.css';

const ReviewDone = ({ ReviewData }) => {
	const [isReviewOn, setIsReviewOn] = useState({});
	const [isReplyOn, setIsReplyOn] = useState({});
	const handleReviewClick = (id) => {
		setIsReviewOn(prevIsReviewOn => ({
			...prevIsReviewOn,
			[id]: !prevIsReviewOn[id]
		}));
	}
	const handleReplyClick = (id) => {
		setIsReplyOn(prevIsReplyOn => ({
			...prevIsReplyOn,
			[id]: !prevIsReplyOn[id]
		}));
	}

	return (
		<>
			<ul className={ module.review_list }>
				{ReviewData.map((item)=>(
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
									<dt>작성일자</dt>
									<dd>
										{ item.review.createAt }
									</dd>
								</div>
							</dl>
						</div> 
						<dl>
							<dt
								className={ isReviewOn[item.seq] ? `${ module.on }` : undefined }
								onClick={()=>handleReviewClick(item.seq)}	
							>
								<div>
									작성한 후기
									<span className={ module.star_count }>{ item.product.rating }</span>
									<span className={ module.like_count }>{ item.product.like }</span>
								</div>
								<div>
									{ item.product.isHostPick && <LabelOutline red>호스트 PICK</LabelOutline> }
									<span className={ module.btn_accordion }>
										{ isReviewOn ? '닫기' : '열기' }
									</span>
								</div>
							</dt>
							{isReviewOn[item.seq]
							? <dd className={ module.on }>
								<p>
									{ item.review.review }
								</p>
							</dd>
							: <dd>
								<p>
									{ item.review.review }
								</p>
							</dd>}
							<dt
								className={ isReplyOn[item.seq] ? `${ module.on }` : undefined }
								onClick={()=>handleReplyClick(item.seq)}
							>
								판매자 답변
								<span className={ module.btn_accordion }>
									{ isReplyOn ? '닫기' : '열기' }
								</span>
							</dt>
							{isReplyOn[item.seq]
							? <dd className={ `${ module.review_reply } ${ module.on }` }>
								<p>
									<strong>{ item.product.hostName }</strong>
									{ item.review.reply }
								</p>
							</dd>
							: <dd className={ module.review_reply }>
								<p>
									<strong>{ item.product.hostName }</strong>
									{ item.review.reply }
								</p>
							</dd>}
						</dl>
					</li>
				))}
			</ul>
		</>
	)
}

export default ReviewDone