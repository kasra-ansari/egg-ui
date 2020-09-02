import React, { Component } from "react";
import Layout from '../App/Layout/index';
import MapContainer from '../../components/MapContainer/index';
import SearchForm from '../../components/SearchForm/index';
import FeatureList from "../../components/FeatureListing";
import CategoryWidget from "../../components/CategoryWidget";
import FunfactsCounter from "../../components/FunfactsCounter";
import SocialCarousel from "../../components/SocialCarousel";
import ListingSection from "../../components/ListingSection";
import LocationWidget from "../../components/LocationWidget";
import TagsWidget from "../../components/TagsWidget";

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
                            <div className="col-md-9 col-sm-8 col-xs-12 main-wrap">
                                <ListingSection />
                            </div>
                            <div className="col-md-3 col-sm-4 col-xs-12">
                                <div className="sidebar sidebar-wrap">
                                    <CategoryWidget />
                                    <LocationWidget />
                                    <TagsWidget />
                                </div>
                            </div>
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