import React from 'react';
import './collection.preview.styles.scss';
import collectionItem from '../../collection-item/collection-item.component'

const CollectionPreview = ({ title, items }) => {
	return (
		<div className='collection-preview'>
			<h1 className='title'>{title.toUpperCase()}</h1>
			<div className='preview'>
				{
					items
						.filter((item, idx) => idx < 4)
						.map(({id , ...otherPropsItem}) => (
							<collectionItem key={id} {...otherPropsItem} />
						))
				}
			</div>
		</div>
	)
}

export default CollectionPreview;
