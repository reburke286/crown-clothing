import React from 'react';
import './shopPage.scss'
import shopData from './shopData'
import CollectionPreview from '../../components/CollectionPreview/collectionPreview';

class ShopPage extends React.Component {
    constructor() {
        super();
        this.state = {
            collections: shopData
        } 
    }

    render() {
        const {collections} = this.state;
        return (
            <div className="shop-page">
                {
                    collections.map(({id, ...otherCollectionProps}) => 
                        (<CollectionPreview key={id} {...otherCollectionProps}/>))
                }
            </div>
        )
    }
}

export default ShopPage;