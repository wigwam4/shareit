import { useState } from 'react';
import { ContentTitle } from '../elements/Title';
import ReviewAvailable from '../components/ReviewAvailable';
import ReviewDone from '../components/ReviewDone';
import TabLists from '../components/TabLists';

const ReviewLists = ({ AvailableData, ReviewData }) => {
	const [index, setIndex] = useState(0);
	const tabData = [
		{
			id: 0,
			title: '작성가능 후기',
			content: <ReviewAvailable AvailableData={ AvailableData } />,
			count(){
				return (
					AvailableData.length
				)
			}
		},
		{
			id: 1,
			title: '작성한 후기',
			content: <ReviewDone ReviewData={ ReviewData } />,
			count(){
				return (
					ReviewData.length
				)
			}
		}
	]

	return (
		<>
			<ContentTitle>후기 관리</ContentTitle>
			<TabLists index={ index } setIndex={ setIndex } tabData={ tabData }/>
			{ tabData[index].content }
		</>
	)
}

export default ReviewLists;