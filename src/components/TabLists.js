import styled from 'styled-components';

const Tabs = styled.div`
    margin-top: 24px; margin-bottom: 54px;
`
const Item = styled.button`
    display: inline-block;
	margin-right: 58px;
	color: #d8dee5; font-size: 1.6rem; font-weight: 500; line-height: 1.875em;
	background: none;
	cursor: pointer;
	border: none;
	outline:none; 
	&:last-child {
		margin-right: 0;
	}
	&.on {
		color: #232323;
	}
`

const TabLists = ({ index, setIndex, tabData }) => {

	return (
		<Tabs>
			{tabData.map((item)=>(
				<Item 
					key={ item.id }
					className={ index === item.id ? 'on' : undefined  }
					onClick={()=>{ setIndex(item.id) }}
				>
					{ item.title }({ item.count() })
				</Item>
			))}
		</Tabs>
	)
}

export default TabLists;