import React from 'react'
import { ProductProp } from './ProductLists'

interface SingleProductProp extends ProductProp {
	onVote: (id: number, typeVote: boolean) => void;
}

const Product: React.FC<SingleProductProp> = (props) => {
	return (
		<div className='item'>
			<div className="image">
				<img src={props.productImageUrl} alt={props.title} />
			</div>
			<div className="middle aligned content">
				<div className="header" style={{display: 'flex', alignItems: 'center'}}>
					<div className='flex' style={{display: 'flex', flexDirection: 'column'}}>
					<a onClick={() => props.onVote(props.id, true)}>
						<i className="large caret up icon"></i>
					</a>
					<a onClick={() => props.onVote(props.id, false)}>
						<i className="large caret down icon"></i>
					</a>
					</div>
					{props.votes}
				</div>
				<div className="description">
					<a href={props.url}>{props.title}</a>
					<p>{props.description}</p>
				</div>
				<div className="extra">
					<span>Submitted by:</span>
					<img
						className='ui avatar image'
						src={props.submitterAvatarUrl}
					/>
				</div>
			</div>
		</div>
	)
}

export default Product