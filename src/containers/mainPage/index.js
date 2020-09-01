import React, { Component } from "react";
import Layout from '../App/Layout/index';
import MapContainer from '../../components/MapContainer/index';
import SearchForm from '../../components/SearchForm/index';
import FeatureList from "../../components/FeatureListing";
import CategoryWidget from "../../components/CategoryWidget";
import FunfactsCounter from "../../components/FunfactsCounter";
import SocialCarousel from "../../components/SocialCarousel";
import ListingSection from "../../components/ListingSection";

class MainPage extends Component {
    render() {
        return (
            <Layout>

                <MapContainer />

                <SearchForm />

                <FeatureList />

                <section className="aside-layout-section padding-bottom-40">
                    <div className="container">
                        <div className="row">
                            <ListingSection />
                            <CategoryWidget />
                        </div>
                    </div>
                </section>

                <FunfactsCounter />

                <SocialCarousel />
            </Layout>
        )

    }
}

export default MainPage;