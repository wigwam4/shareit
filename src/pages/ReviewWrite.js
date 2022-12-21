import React from 'react';
import { useParams } from 'react-router-dom';

const ReviewWrite = ({ data }) => {
	let { seq } = useParams();
	let review;

	for (let i=0; i<data.length; i++){
		if (data[i].seq === Number(seq)){
			review = data[i];
		}
	}

	return (
		<div>ReviewWrite</div>
	)
}

export default ReviewWrite;