import React, { Component } from "react";
import Layout from '../App/Layout/index';
import MapContainer from '../../components/MapContainer/index';
import SearchForm from '../../components/SearchForm/index';
import FeatureList from "../../components/FeatureListing";
import CategoryWidget from "../../components/CategoryWidget";
import FunfactsCounter from "../../components/FunfactsCounter";
import SocialCarousel from "../../components/SocialCarousel";

class MainPage extends Component {
    render() {
        return (
            <Layout>

                <MapContainer />

                <SearchForm />

                <FeatureList/>

                <CategoryWidget/>

                <FunfactsCounter />

                <SocialCarousel />
            </Layout>
        )

    }
}

export default MainPage;