import styled from 'styled-components';

const Tabs = styled.div`
    margin-top: 24px; margin-bottom: 54px;
	@media screen and (max-width:1024px){
		display: flex;
        margin: 0;
    }
`
const Item = styled.button`
    display: inline-block;
	margin-right: 58px;
	color: #d8dee5; font-family: NotoSansCJK, sans-serif; font-size: 1.6rem; font-weight: 500; line-height: 1.875em;
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
	@media screen and (max-width:1024px){
		display: flex;
		margin-right: 0;
		height: 70px;
        flex: 1; justify-content: center; 
		font-size: 1.8rem; align-items: center;
		border-bottom: 2px solid #D8DEE5;
		&.on {
			border-color: #232323;
		}
    }
	@media screen and (max-width:480px){
		height: 50px;
		font-size: 1.6rem; 
    }
`

const TabLists = ({ index, setIndex, tabData }) => {

	return (
		<Tabs>
			{tabData.map((item)=>(
				<Item 
					key={ item.id }
					className={ index === item.id && 'on' }
					onClick={()=>{ setIndex(item.id) }}
				>
					{ item.title }({ item.count() })
				</Item>
			))}
		</Tabs>
	)
}

export default TabLists;