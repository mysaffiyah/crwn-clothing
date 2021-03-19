import React from 'react';
import {Route} from 'react-router-dom';
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";
import {firestore, convertCollectionSnapshotToMap} from "../../firebase/firebase.utils";
import {connect} from 'react-redux';
import {updateCollections} from "../../redux/shop/shop.actions";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component{

    state = {
        loading: true
    };

    unsubscribeFromSnapShop = null;

    componentDidMount() {
        const {updateCollections} = this.props;
        const collectionRef = firestore.collection('collections');

        //get data via promise
        collectionRef.get().then(snapShot => {
            const collectionsMap = convertCollectionSnapshotToMap(snapShot);
            updateCollections(collectionsMap);
            this.setState({loading: false});
        });

        //fetch API method
        // fetch('https://firestore.googleapis.com/v1/projects/crwn-clothing-db-c810d/databases/(default)/documents/collections')
        //     .then(response => response.json())
        //     .then(collections => console.log(collections));

        //observer/observal method
        // this.unsubscribeFromSnapShop = collectionRef.onSnapshot(async snapShot => {
        //     const collectionsMap = convertCollectionSnapshotToMap(snapShot);
        //     updateCollections(collectionsMap);
        //     this.setState({loading: false});
        // });
    }

    render () {
        const {match} = this.props;
        const {loading} = this.state
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={loading} {...props} />} />
                <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props} />} />
            </div>
        )
    }
};

const mapDispathToProps = dispatch => ({
    updateCollections: collectionMap => dispatch(updateCollections(collectionMap))
});

export default connect(null, mapDispathToProps)(ShopPage);