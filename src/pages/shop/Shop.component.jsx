import React, { Component } from 'react';
import SHOP_DATA from './Shop.data';
import CollectionPreview from '../../components/directory/collection-preview/collection.preview.component';

export default class ShopComponent extends Component {
	constructor(props) {
		super(props);

		this.state = {
			collections: SHOP_DATA
		}
	}
	render() {
		const { collections } = this.state;
		return (
			<div>
				{
					collections.map(({id , ...otherItems})=>(
						<CollectionPreview key={id} {...otherItems} />
					))
				}
			</div>
		)
	}
}
