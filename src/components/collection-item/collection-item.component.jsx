import React from 'react';
import './collection-item.component.style.scss';

const CollectionItem = ({ id, name, price, imageUrl }) => {

	console.log(id , name , price , imageUrl)
	return (
		<div className='collection-item'>
			{console.log('hello')}
			<div 
			className='image' 
			style={{ backgroundImage: `url(${imageUrl})` }} />

			<div className="collection-footer">
				<span className='name'>{name}</span>
				<span className='price'>{price}</span>
			</div>
		</div>
	)
}

export default CollectionItem;
