import { useParams } from 'react-router-dom';
import { Button } from '../elements/Button';
import { Label } from '../elements/Label';

const ReviewWrite = ({ data }) => {
	let { id } = useParams();
	let datum;

	for (let i=0; i<data.length; i++){
		if (data[i].seq === Number(id)){
			datum = data[i];
		}
	}

	return (
		<>
			<h2>후기 상세</h2>
			<div style={{ marginTop: '22px', marginBottom: '24px', textAlign: 'right' }}>
				<Button secondary sm>삭제</Button>
			</div>
			<div>
				<div>
					<div className='img_wrap'>
						<img />
					</div>
					<strong>{ datum.product.hostName }</strong>
					{ datum.product.spaceName }
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
		</>
	)
}

export default ReviewWrite;