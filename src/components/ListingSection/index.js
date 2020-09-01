import React from "react";

const ListingSection = () => {
    return (
        <div className="col-md-9 col-sm-8 col-xs-12 main-wrap">
        <div className="listing-section">
            <div className="">
                <div className="add-listing-wrapper">
                    <div className="add-listing-nav shadow-1">
                        <div className="row clearfix">
                            <div className="col-md-9 col-sm-9 col-xs-9 pull-left">
                                <div className="listing-tabs">
                                    <ul className="nav nav-tabs">
                                        <li className="active"><a data-toggle="tab" href="#latest-listing">Latest ads</a></li>
                                        <li><a data-toggle="tab" href="#recent-listing">Recent ads</a></li>
                                        <li><a data-toggle="tab" href="#popular-listing">popular ads</a></li>
                                    </ul>

                                </div>
                            </div>
                            <div className="col-md-3 col-sm-3 col-xs-3 pull-right">
                                <div className="view-switcher">
                                    <ul>
                                        <li className="gridview">grid view<i className="fa fa-th"></i></li>
                                        <li className="listview active">list view<i className="fa fa-th-list"></i></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="listing-main listview tab-content padding-top-30">
                        <div id="latest-listing" className="tab-pane active">
                            <div className="listing-wrapper three-column row">
                                <div className="item col-md-4 col-sm-6 col-xs-12">
                                    <div className="listing-item clearfix">
                                        <div className="figure">
                                            <img src="images/listings/270x220/01.jpg" alt="listing item" />
                                            <div className="listing-overlay">
                                                <div className="listing-overlay-inner rgba-bgyallow-1">
                                                    <div className="overlay-content">
                                                        <ul className="listing-links">
                                                            <li><a className="bgwhite nohover" href="#"><i className="fa fa-heart green-1 "></i></a></li>
                                                            <li><a className="bgwhite nohover" href="single-listing.html"><i className="fa fa-shopping-cart blue-1"></i></a></li>
                                                            <li><a className="bgwhite nohover" href="#"><i className="fa fa-share yallow-1"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="listing-content clearfix">
                                            <div className="listing-meta-cat">
                                                <a className="bgyallow-1" href="#"><i className="fa fa-suitcase white"></i></a>
                                            </div>
                                            <div className="listing-title">
                                                <h6><a href="single-listing.html">Looking for a job</a></h6>
                                            </div>
                                            <div className="listing-disc">
                                                <p>Morbi accumsan ipsum velit. Nam nec tellus a odio sit tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. className aptent taciti sociosqu ad litora torquent permis conubia.Morbi accumsan ipsum velit. Nam nec tellus a odio sit tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit.</p>
                                            </div>
                                            <div className="listing-location pull-left">
                                                <a href="#"><i className="fa fa-map-marker"></i> Turkey</a>
                                                <a href="#"><i className="fa fa-map-marker"></i> 163 William Street #2 / New York, NY 10038</a>
                                            </div>
                                            <div className="star-rating pull-right">
                                                <div className="score-callback" data-score="5"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="listing-border-bottom bgyallow-1"></div>
                                </div>
                                <div className="item col-md-4 col-sm-6 col-xs-12">
                                    <div className="listing-item clearfix">
                                        <div className="figure">
                                            <img src="images/listings/270x220/02.jpg" alt="listing item" />
                                            <div className="listing-overlay">
                                                <div className="listing-overlay-inner rgba-bgblue-1">
                                                    <div className="overlay-content">
                                                        <ul className="listing-links">
                                                            <li><a className="bgwhite nohover" href="#"><i className="fa fa-heart green-1 "></i></a></li>
                                                            <li><a className="bgwhite nohover" href="single-listing.html"><i className="fa fa-shopping-cart blue-1"></i></a></li>
                                                            <li><a className="bgwhite nohover" href="#"><i className="fa fa-share yallow-1"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="listing-content clearfix">
                                            <div className="listing-meta-cat">
                                                <a className="bgblue-1" href="#"><i className="fa fa-heart white"></i></a>
                                            </div>
                                            <div className="listing-title">
                                                <h6><a href="single-listing.html">Doctor Available</a></h6>
                                            </div>
                                            <div className="listing-disc">
                                                <p>Morbi accumsan ipsum velit. Nam nec tellus a odio sit tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. className aptent taciti sociosqu ad litora torquent permis conubia.Morbi accumsan ipsum velit. Nam nec tellus a odio sit tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit.</p>
                                            </div>
                                            <div className="listing-location pull-left">
                                                <a href="#"><i className="fa fa-map-marker"></i> Turkey</a>
                                                <a href="#"><i className="fa fa-map-marker"></i> 163 William Street #2 / New York, NY 10038</a>
                                            </div>
                                            <div className="star-rating pull-right">
                                                <div className="score-callback" data-score="5"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="listing-border-bottom bgblue-1"></div>
                                </div>
                                {/* <div className="item col-md-4 col-sm-6 col-xs-12">
                                    <div className="listing-item clearfix">
                                        <div className="figure">
                                            <img src="http://demo.designsvilla.com/html/templates/listing-classNameified/main/images/listings/270x220/03.jpg" alt="listing item" />
                                            <div className="listing-overlay">
                                                <div className="listing-overlay-inner rgba-bggreen-2">
                                                    <div className="overlay-content">
                                                        <ul className="listing-links">
                                                            <li><a className="bgwhite nohover" href="#"><i className="fa fa-heart green-1 "></i></a></li>
                                                            <li><a className="bgwhite nohover" href="single-listing.html"><i className="fa fa-shopping-cart blue-1"></i></a></li>
                                                            <li><a className="bgwhite nohover" href="#"><i className="fa fa-share yallow-1"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="listing-content clearfix">
                                            <div className="listing-meta-cat">
                                                <a className="bggreen-2" href="#"><i className="fa fa-home white"></i></a>
                                            </div>
                                            <div className="listing-title">
                                                <h6><a href="single-listing.html">SALE MY Property</a></h6>
                                            </div>
                                            <div className="listing-disc">
                                                <p>Morbi accumsan ipsum velit. Nam nec tellus a odio sit tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. className aptent taciti sociosqu ad litora torquent permis conubia.Morbi accumsan ipsum velit. Nam nec tellus a odio sit tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit.</p>
                                            </div>
                                            <div className="listing-location pull-left">
                                                <a href="#"><i className="fa fa-map-marker"></i> Turkey</a>
                                                <a href="#"><i className="fa fa-map-marker"></i> 163 William Street #2 / New York, NY 10038</a>
                                            </div>
                                            <div className="star-rating pull-right">
                                                <div className="score-callback" data-score="5"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="listing-border-bottom bggreen-2"></div>
                                </div> */}
                                <div className="item col-md-4 col-sm-6 col-xs-12">
                                    <div className="listing-item clearfix">
                                        <div className="figure">
                                            <img src="images/listings/270x220/05.jpg" alt="listing item" />
                                            <div className="listing-overlay">
                                                <div className="listing-overlay-inner rgba-bgorange-1">
                                                    <div className="overlay-content">
                                                        <ul className="listing-links">
                                                            <li><a className="bgwhite nohover" href="#"><i className="fa fa-heart green-1 "></i></a></li>
                                                            <li><a className="bgwhite nohover" href="single-listing.html"><i className="fa fa-shopping-cart blue-1"></i></a></li>
                                                            <li><a className="bgwhite nohover" href="#"><i className="fa fa-share yallow-1"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="listing-content clearfix">
                                            <div className="listing-meta-cat">
                                                <a className="bgorange-1" href="#"><i className="fa fa-female white"></i></a>
                                            </div>
                                            <div className="listing-title">
                                                <h6><a href="single-listing.html">Meeting partner</a></h6>
                                            </div>
                                            <div className="listing-disc">
                                                <p>Morbi accumsan ipsum velit. Nam nec tellus a odio sit tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. className aptent taciti sociosqu ad litora torquent permis conubia.Morbi accumsan ipsum velit. Nam nec tellus a odio sit tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit.</p>
                                            </div>
                                            <div className="listing-location pull-left">
                                                <a href="#"><i className="fa fa-map-marker"></i> Turkey</a>
                                                <a href="#"><i className="fa fa-map-marker"></i> 163 William Street #2 / New York, NY 10038</a>
                                            </div>
                                            <div className="star-rating pull-right">
                                                <div className="score-callback" data-score="5"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="listing-border-bottom bgorange-1"></div>
                                </div>
                                <div className="item col-md-4 col-sm-6 col-xs-12">
                                    <div className="listing-item clearfix">
                                        <div className="figure">
                                            <img src="images/listings/270x220/06.jpg" alt="listing item" />
                                            <div className="listing-overlay">
                                                <div className="listing-overlay-inner rgba-bggreen-1">
                                                    <div className="overlay-content">
                                                        <ul className="listing-links">
                                                            <li><a className="bgwhite nohover" href="#"><i className="fa fa-heart green-1 "></i></a></li>
                                                            <li><a className="bgwhite nohover" href="single-listing.html"><i className="fa fa-shopping-cart blue-1"></i></a></li>
                                                            <li><a className="bgwhite nohover" href="#"><i className="fa fa-share yallow-1"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="listing-content clearfix">
                                            <div className="listing-meta-cat">
                                                <a className="bggreen-1" href="#"><i className="fa fa-plane white"></i></a>
                                            </div>
                                            <div className="listing-title">
                                                <h6><a href="single-listing.html">Hotels & Travel</a></h6>
                                            </div>
                                            <div className="listing-disc">
                                                <p>Morbi accumsan ipsum velit. Nam nec tellus a odio sit tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. className aptent taciti sociosqu ad litora torquent permis conubia.Morbi accumsan ipsum velit. Nam nec tellus a odio sit tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit.</p>
                                            </div>
                                            <div className="listing-location pull-left">
                                                <a href="#"><i className="fa fa-map-marker"></i> Turkey</a>
                                                <a href="#"><i className="fa fa-map-marker"></i> 163 William Street #2 / New York, NY 10038</a>
                                            </div>
                                            <div className="star-rating pull-right">
                                                <div className="score-callback" data-score="5"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="listing-border-bottom bggreen-1"></div>
                                </div>
                                <div className="item col-md-4 col-sm-6 col-xs-12">
                                    <div className="listing-item clearfix">
                                        <div className="figure">
                                            <img src="images/listings/270x220/07.jpg" alt="listing item" />
                                            <div className="listing-overlay">
                                                <div className="listing-overlay-inner rgba-bgpurpal-1">
                                                    <div className="overlay-content">
                                                        <ul className="listing-links">
                                                            <li><a className="bgwhite nohover" href="#"><i className="fa fa-heart green-1 "></i></a></li>
                                                            <li><a className="bgwhite nohover" href="single-listing.html"><i className="fa fa-shopping-cart blue-1"></i></a></li>
                                                            <li><a className="bgwhite nohover" href="#"><i className="fa fa-share yallow-1"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="listing-content clearfix">
                                            <div className="listing-meta-cat">
                                                <a className="bgred-1" href="#"><i className="fa fa-cutlery  white"></i></a>
                                            </div>
                                            <div className="listing-title">
                                                <h6><a href="single-listing.html">I need some food</a></h6>
                                            </div>
                                            <div className="listing-disc">
                                                <p>Morbi accumsan ipsum velit. Nam nec tellus a odio sit tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. className aptent taciti sociosqu ad litora torquent permis conubia.Morbi accumsan ipsum velit. Nam nec tellus a odio sit tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit.</p>
                                            </div>
                                            <div className="listing-location pull-left">
                                                <a href="#"><i className="fa fa-map-marker"></i> Turkey</a>
                                                <a href="#"><i className="fa fa-map-marker"></i> 163 William Street #2 / New York, NY 10038</a>
                                            </div>
                                            <div className="star-rating pull-right">
                                                <div className="score-callback" data-score="5"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="listing-border-bottom bgred-1"></div>
                                </div>
                                <div className="item col-md-4 col-sm-6 col-xs-12">
                                    <div className="listing-item clearfix">
                                        <div className="figure">
                                            <img src="images/listings/270x220/08.jpg" alt="listing item" />
                                            <div className="listing-overlay">
                                                <div className="listing-overlay-inner rgba-bgorange-1">
                                                    <div className="overlay-content">
                                                        <ul className="listing-links">
                                                            <li><a className="bgwhite nohover" href="#"><i className="fa fa-heart green-1 "></i></a></li>
                                                            <li><a className="bgwhite nohover" href="single-listing.html"><i className="fa fa-shopping-cart blue-1"></i></a></li>
                                                            <li><a className="bgwhite nohover" href="#"><i className="fa fa-share yallow-1"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="listing-content clearfix">
                                            <div className="listing-meta-cat">
                                                <a className="bgbrown-1" href="#"><i className="fa fa-paw white"></i></a>
                                            </div>
                                            <div className="listing-title">
                                                <h6><a href="single-listing.html">i love my pet</a></h6>
                                            </div>
                                            <div className="listing-disc">
                                                <p>Morbi accumsan ipsum velit. Nam nec tellus a odio sit tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. className aptent taciti sociosqu ad litora torquent permis conubia.Morbi accumsan ipsum velit. Nam nec tellus a odio sit tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit.</p>
                                            </div>
                                            <div className="listing-location pull-left">
                                                <a href="#"><i className="fa fa-map-marker"></i> Turkey</a>
                                                <a href="#"><i className="fa fa-map-marker"></i> 163 William Street #2 / New York, NY 10038</a>
                                            </div>
                                            <div className="star-rating pull-right">
                                                <div className="score-callback" data-score="5"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="listing-border-bottom bgbrown-1"></div>
                                </div>
                                <div className="item col-md-4 col-sm-6 col-xs-12">
                                    <div className="listing-item clearfix">
                                        <div className="figure">
                                            <img src="images/listings/270x220/04.jpg" alt="listing item" />
                                            <div className="listing-overlay">
                                                <div className="listing-overlay-inner rgba-bgpurpal-1">
                                                    <div className="overlay-content">
                                                        <ul className="listing-links">
                                                            <li><a className="bgwhite nohover" href="#"><i className="fa fa-heart green-1 "></i></a></li>
                                                            <li><a className="bgwhite nohover" href="single-listing.html"><i className="fa fa-shopping-cart blue-1"></i></a></li>
                                                            <li><a className="bgwhite nohover" href="#"><i className="fa fa-share yallow-1"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="listing-content clearfix">
                                            <div className="listing-meta-cat">
                                                <a className="bgpurpal-1" href="#"><i className="fa fa-eye white"></i></a>
                                            </div>
                                            <div className="listing-title">
                                                <h6><a href="single-listing.html">Beauty & Spas</a></h6>
                                            </div>
                                            <div className="listing-disc">
                                                <p>Morbi accumsan ipsum velit. Nam nec tellus a odio sit tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. className aptent taciti sociosqu ad litora torquent permis conubia.Morbi accumsan ipsum velit. Nam nec tellus a odio sit tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit.</p>
                                            </div>
                                            <div className="listing-location pull-left">
                                                <a href="#"><i className="fa fa-map-marker"></i> Turkey</a>
                                                <a href="#"><i className="fa fa-map-marker"></i> 163 William Street #2 / New York, NY 10038</a>
                                            </div>
                                            <div className="star-rating pull-right">
                                                <div className="score-callback" data-score="5"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="listing-border-bottom bgpurpal-1"></div>
                                </div>
                                <div className="item col-md-4 col-sm-6 col-xs-12">
                                    <div className="listing-item clearfix">
                                        <div className="figure">
                                            <img src="images/listings/270x220/09.jpg" alt="listing item" />
                                            <div className="listing-overlay">
                                                <div className="listing-overlay-inner rgba-bgblue-3">
                                                    <div className="overlay-content">
                                                        <ul className="listing-links">
                                                            <li><a className="bgwhite nohover" href="#"><i className="fa fa-heart green-1 "></i></a></li>
                                                            <li><a className="bgwhite nohover" href="single-listing.html"><i className="fa fa-shopping-cart blue-1"></i></a></li>
                                                            <li><a className="bgwhite nohover" href="#"><i className="fa fa-share yallow-1"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="listing-content clearfix">
                                            <div className="listing-meta-cat">
                                                <a className="bgblue-3" href="#"><i className="fa fa-wrench white"></i></a>
                                            </div>
                                            <div className="listing-title">
                                                <h6><a href="single-listing.html">Hotels & Travel</a></h6>
                                            </div>
                                            <div className="listing-disc">
                                                <p>Morbi accumsan ipsum velit. Nam nec tellus a odio sit tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. className aptent taciti sociosqu ad litora torquent permis conubia.Morbi accumsan ipsum velit. Nam nec tellus a odio sit tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit.</p>
                                            </div>
                                            <div className="listing-location pull-left">
                                                <a href="#"><i className="fa fa-map-marker"></i> Turkey</a>
                                                <a href="#"><i className="fa fa-map-marker"></i> 163 William Street #2 / New York, NY 10038</a>
                                            </div>
                                            <div className="star-rating pull-right">
                                                <div className="score-callback" data-score="5"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="listing-border-bottom bgblue-3"></div>
                                </div>
                            </div>
                        </div>
                        <div id="recent-listing" className="tab-pane">
                            <div className="listing-wrapper three-column row">
                                <div className="item col-md-4 col-sm-6 col-xs-12">
                                    <div className="listing-item clearfix">
                                        <div className="figure">
                                            <img src="images/listings/270x220/01.jpg" alt="listing item" />
                                            <div className="listing-overlay">
                                                <div className="listing-overlay-inner rgba-bgyallow-1">
                                                    <div className="overlay-content">
                                                        <ul className="listing-links">
                                                            <li><a className="bgwhite nohover" href="#"><i className="fa fa-heart green-1 "></i></a></li>
                                                            <li><a className="bgwhite nohover" href="single-listing.html"><i className="fa fa-shopping-cart blue-1"></i></a></li>
                                                            <li><a className="bgwhite nohover" href="#"><i className="fa fa-share yallow-1"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="listing-content clearfix">
                                            <div className="listing-meta-cat">
                                                <a className="bgyallow-1" href="#"><i className="fa fa-suitcase white"></i></a>
                                            </div>
                                            <div className="listing-title">
                                                <h6><a href="single-listing.html">Looking for a job</a></h6>
                                            </div>
                                            <div className="listing-disc">
                                                <p>Morbi accumsan ipsum velit. Nam nec tellus a odio sit tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. className aptent taciti sociosqu ad litora torquent permis conubia.Morbi accumsan ipsum velit. Nam nec tellus a odio sit tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit.</p>
                                            </div>
                                            <div className="listing-location pull-left">
                                                <a href="#"><i className="fa fa-map-marker"></i> Turkey</a>
                                                <a href="#"><i className="fa fa-map-marker"></i> 163 William Street #2 / New York, NY 10038</a>
                                            </div>
                                            <div className="star-rating pull-right">
                                                <div className="score-callback" data-score="5"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="listing-border-bottom bgyallow-1"></div>
                                </div>
                                <div className="item col-md-4 col-sm-6 col-xs-12">
                                    <div className="listing-item clearfix">
                                        <div className="figure">
                                            <img src="images/listings/270x220/02.jpg" alt="listing item" />
                                            <div className="listing-overlay">
                                                <div className="listing-overlay-inner rgba-bgblue-1">
                                                    <div className="overlay-content">
                                                        <ul className="listing-links">
                                                            <li><a className="bgwhite nohover" href="#"><i className="fa fa-heart green-1 "></i></a></li>
                                                            <li><a className="bgwhite nohover" href="single-listing.html"><i className="fa fa-shopping-cart blue-1"></i></a></li>
                                                            <li><a className="bgwhite nohover" href="#"><i className="fa fa-share yallow-1"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="listing-content clearfix">
                                            <div className="listing-meta-cat">
                                                <a className="bgblue-1" href="#"><i className="fa fa-heart white"></i></a>
                                            </div>
                                            <div className="listing-title">
                                                <h6><a href="single-listing.html">Doctor Available</a></h6>
                                            </div>
                                            <div className="listing-disc">
                                                <p>Morbi accumsan ipsum velit. Nam nec tellus a odio sit tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. className aptent taciti sociosqu ad litora torquent permis conubia.Morbi accumsan ipsum velit. Nam nec tellus a odio sit tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit.</p>
                                            </div>
                                            <div className="listing-location pull-left">
                                                <a href="#"><i className="fa fa-map-marker"></i> Turkey</a>
                                                <a href="#"><i className="fa fa-map-marker"></i> 163 William Street #2 / New York, NY 10038</a>
                                            </div>
                                            <div className="star-rating pull-right">
                                                <div className="score-callback" data-score="5"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="listing-border-bottom bgblue-1"></div>
                                </div>
                                <div className="item col-md-4 col-sm-6 col-xs-12">
                                    <div className="listing-item clearfix">
                                        <div className="figure">
                                            <img src="http://demo.designsvilla.com/html/templates/listing-classNameified/main/images/listings/270x220/03.jpg" alt="listing item" />
                                            <div className="listing-overlay">
                                                <div className="listing-overlay-inner rgba-bggreen-2">
                                                    <div className="overlay-content">
                                                        <ul className="listing-links">
                                                            <li><a className="bgwhite nohover" href="#"><i className="fa fa-heart green-1 "></i></a></li>
                                                            <li><a className="bgwhite nohover" href="single-listing.html"><i className="fa fa-shopping-cart blue-1"></i></a></li>
                                                            <li><a className="bgwhite nohover" href="#"><i className="fa fa-share yallow-1"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="listing-content clearfix">
                                            <div className="listing-meta-cat">
                                                <a className="bggreen-2" href="#"><i className="fa fa-home white"></i></a>
                                            </div>
                                            <div className="listing-title">
                                                <h6><a href="single-listing.html">SALE MY Property</a></h6>
                                            </div>
                                            <div className="listing-disc">
                                                <p>Morbi accumsan ipsum velit. Nam nec tellus a odio sit tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. className aptent taciti sociosqu ad litora torquent permis conubia.Morbi accumsan ipsum velit. Nam nec tellus a odio sit tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit.</p>
                                            </div>
                                            <div className="listing-location pull-left">
                                                <a href="#"><i className="fa fa-map-marker"></i> Turkey</a>
                                                <a href="#"><i className="fa fa-map-marker"></i> 163 William Street #2 / New York, NY 10038</a>
                                            </div>
                                            <div className="star-rating pull-right">
                                                <div className="score-callback" data-score="5"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="listing-border-bottom bggreen-2"></div>
                                </div>
                                <div className="item col-md-4 col-sm-6 col-xs-12">
                                    <div className="listing-item clearfix">
                                        <div className="figure">
                                            <img src="images/listings/270x220/05.jpg" alt="listing item" />
                                            <div className="listing-overlay">
                                                <div className="listing-overlay-inner rgba-bgorange-1">
                                                    <div className="overlay-content">
                                                        <ul className="listing-links">
                                                            <li><a className="bgwhite nohover" href="#"><i className="fa fa-heart green-1 "></i></a></li>
                                                            <li><a className="bgwhite nohover" href="single-listing.html"><i className="fa fa-shopping-cart blue-1"></i></a></li>
                                                            <li><a className="bgwhite nohover" href="#"><i className="fa fa-share yallow-1"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="listing-content clearfix">
                                            <div className="listing-meta-cat">
                                                <a className="bgorange-1" href="#"><i className="fa fa-female white"></i></a>
                                            </div>
                                            <div className="listing-title">
                                                <h6><a href="single-listing.html">Meeting partner</a></h6>
                                            </div>
                                            <div className="listing-disc">
                                                <p>Morbi accumsan ipsum velit. Nam nec tellus a odio sit tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. className aptent taciti sociosqu ad litora torquent permis conubia.Morbi accumsan ipsum velit. Nam nec tellus a odio sit tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit.</p>
                                            </div>
                                            <div className="listing-location pull-left">
                                                <a href="#"><i className="fa fa-map-marker"></i> Turkey</a>
                                                <a href="#"><i className="fa fa-map-marker"></i> 163 William Street #2 / New York, NY 10038</a>
                                            </div>
                                            <div className="star-rating pull-right">
                                                <div className="score-callback" data-score="5"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="listing-border-bottom bgorange-1"></div>
                                </div>
                                <div className="item col-md-4 col-sm-6 col-xs-12">
                                    <div className="listing-item clearfix">
                                        <div className="figure">
                                            <img src="images/listings/270x220/06.jpg" alt="listing item" />
                                            <div className="listing-overlay">
                                                <div className="listing-overlay-inner rgba-bggreen-1">
                                                    <div className="overlay-content">
                                                        <ul className="listing-links">
                                                            <li><a className="bgwhite nohover" href="#"><i className="fa fa-heart green-1 "></i></a></li>
                                                            <li><a className="bgwhite nohover" href="single-listing.html"><i className="fa fa-shopping-cart blue-1"></i></a></li>
                                                            <li><a className="bgwhite nohover" href="#"><i className="fa fa-share yallow-1"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="listing-content clearfix">
                                            <div className="listing-meta-cat">
                                                <a className="bggreen-1" href="#"><i className="fa fa-plane white"></i></a>
                                            </div>
                                            <div className="listing-title">
                                                <h6><a href="single-listing.html">Hotels & Travel</a></h6>
                                            </div>
                                            <div className="listing-disc">
                                                <p>Morbi accumsan ipsum velit. Nam nec tellus a odio sit tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. className aptent taciti sociosqu ad litora torquent permis conubia.Morbi accumsan ipsum velit. Nam nec tellus a odio sit tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit.</p>
                                            </div>
                                            <div className="listing-location pull-left">
                                                <a href="#"><i className="fa fa-map-marker"></i> Turkey</a>
                                                <a href="#"><i className="fa fa-map-marker"></i> 163 William Street #2 / New York, NY 10038</a>
                                            </div>
                                            <div className="star-rating pull-right">
                                                <div className="score-callback" data-score="5"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="listing-border-bottom bggreen-1"></div>
                                </div>
                                <div className="item col-md-4 col-sm-6 col-xs-12">
                                    <div className="listing-item clearfix">
                                        <div className="figure">
                                            <img src="images/listings/270x220/07.jpg" alt="listing item" />
                                            <div className="listing-overlay">
                                                <div className="listing-overlay-inner rgba-bgpurpal-1">
                                                    <div className="overlay-content">
                                                        <ul className="listing-links">
                                                            <li><a className="bgwhite nohover" href="#"><i className="fa fa-heart green-1 "></i></a></li>
                                                            <li><a className="bgwhite nohover" href="single-listing.html"><i className="fa fa-shopping-cart blue-1"></i></a></li>
                                                            <li><a className="bgwhite nohover" href="#"><i className="fa fa-share yallow-1"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="listing-content clearfix">
                                            <div className="listing-meta-cat">
                                                <a className="bgred-1" href="#"><i className="fa fa-cutlery  white"></i></a>
                                            </div>
                                            <div className="listing-title">
                                                <h6><a href="single-listing.html">I need some food</a></h6>
                                            </div>
                                            <div className="listing-disc">
                                                <p>Morbi accumsan ipsum velit. Nam nec tellus a odio sit tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. className aptent taciti sociosqu ad litora torquent permis conubia.Morbi accumsan ipsum velit. Nam nec tellus a odio sit tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit.</p>
                                            </div>
                                            <div className="listing-location pull-left">
                                                <a href="#"><i className="fa fa-map-marker"></i> Turkey</a>
                                                <a href="#"><i className="fa fa-map-marker"></i> 163 William Street #2 / New York, NY 10038</a>
                                            </div>
                                            <div className="star-rating pull-right">
                                                <div className="score-callback" data-score="5"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="listing-border-bottom bgred-1"></div>
                                </div>
                                <div className="item col-md-4 col-sm-6 col-xs-12">
                                    <div className="listing-item clearfix">
                                        <div className="figure">
                                            <img src="images/listings/270x220/08.jpg" alt="listing item" />
                                            <div className="listing-overlay">
                                                <div className="listing-overlay-inner rgba-bgorange-1">
                                                    <div className="overlay-content">
                                                        <ul className="listing-links">
                                                            <li><a className="bgwhite nohover" href="#"><i className="fa fa-heart green-1 "></i></a></li>
                                                            <li><a className="bgwhite nohover" href="single-listing.html"><i className="fa fa-shopping-cart blue-1"></i></a></li>
                                                            <li><a className="bgwhite nohover" href="#"><i className="fa fa-share yallow-1"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="listing-content clearfix">
                                            <div className="listing-meta-cat">
                                                <a className="bgbrown-1" href="#"><i className="fa fa-paw white"></i></a>
                                            </div>
                                            <div className="listing-title">
                                                <h6><a href="single-listing.html">i love my pet</a></h6>
                                            </div>
                                            <div className="listing-disc">
                                                <p>Morbi accumsan ipsum velit. Nam nec tellus a odio sit tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. className aptent taciti sociosqu ad litora torquent permis conubia.Morbi accumsan ipsum velit. Nam nec tellus a odio sit tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit.</p>
                                            </div>
                                            <div className="listing-location pull-left">
                                                <a href="#"><i className="fa fa-map-marker"></i> Turkey</a>
                                                <a href="#"><i className="fa fa-map-marker"></i> 163 William Street #2 / New York, NY 10038</a>
                                            </div>
                                            <div className="star-rating pull-right">
                                                <div className="score-callback" data-score="5"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="listing-border-bottom bgbrown-1"></div>
                                </div>
                                <div className="item col-md-4 col-sm-6 col-xs-12">
                                    <div className="listing-item clearfix">
                                        <div className="figure">
                                            <img src="images/listings/270x220/04.jpg" alt="listing item" />
                                            <div className="listing-overlay">
                                                <div className="listing-overlay-inner rgba-bgpurpal-1">
                                                    <div className="overlay-content">
                                                        <ul className="listing-links">
                                                            <li><a className="bgwhite nohover" href="#"><i className="fa fa-heart green-1 "></i></a></li>
                                                            <li><a className="bgwhite nohover" href="single-listing.html"><i className="fa fa-shopping-cart blue-1"></i></a></li>
                                                            <li><a className="bgwhite nohover" href="#"><i className="fa fa-share yallow-1"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="listing-content clearfix">
                                            <div className="listing-meta-cat">
                                                <a className="bgpurpal-1" href="#"><i className="fa fa-eye white"></i></a>
                                            </div>
                                            <div className="listing-title">
                                                <h6><a href="single-listing.html">Beauty & Spas</a></h6>
                                            </div>
                                            <div className="listing-disc">
                                                <p>Morbi accumsan ipsum velit. Nam nec tellus a odio sit tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. className aptent taciti sociosqu ad litora torquent permis conubia.Morbi accumsan ipsum velit. Nam nec tellus a odio sit tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit.</p>
                                            </div>
                                            <div className="listing-location pull-left">
                                                <a href="#"><i className="fa fa-map-marker"></i> Turkey</a>
                                                <a href="#"><i className="fa fa-map-marker"></i> 163 William Street #2 / New York, NY 10038</a>
                                            </div>
                                            <div className="star-rating pull-right">
                                                <div className="score-callback" data-score="5"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="listing-border-bottom bgpurpal-1"></div>
                                </div>
                                <div className="item col-md-4 col-sm-6 col-xs-12">
                                    <div className="listing-item clearfix">
                                        <div className="figure">
                                            <img src="images/listings/270x220/09.jpg" alt="listing item" />
                                            <div className="listing-overlay">
                                                <div className="listing-overlay-inner rgba-bgblue-3">
                                                    <div className="overlay-content">
                                                        <ul className="listing-links">
                                                            <li><a className="bgwhite nohover" href="#"><i className="fa fa-heart green-1 "></i></a></li>
                                                            <li><a className="bgwhite nohover" href="single-listing.html"><i className="fa fa-shopping-cart blue-1"></i></a></li>
                                                            <li><a className="bgwhite nohover" href="#"><i className="fa fa-share yallow-1"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="listing-content clearfix">
                                            <div className="listing-meta-cat">
                                                <a className="bgblue-3" href="#"><i className="fa fa-wrench white"></i></a>
                                            </div>
                                            <div className="listing-title">
                                                <h6><a href="single-listing.html">Hotels & Travel</a></h6>
                                            </div>
                                            <div className="listing-disc">
                                                <p>Morbi accumsan ipsum velit. Nam nec tellus a odio sit tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. className aptent taciti sociosqu ad litora torquent permis conubia.Morbi accumsan ipsum velit. Nam nec tellus a odio sit tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit.</p>
                                            </div>
                                            <div className="listing-location pull-left">
                                                <a href="#"><i className="fa fa-map-marker"></i> Turkey</a>
                                                <a href="#"><i className="fa fa-map-marker"></i> 163 William Street #2 / New York, NY 10038</a>
                                            </div>
                                            <div className="star-rating pull-right">
                                                <div className="score-callback" data-score="5"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="listing-border-bottom bgblue-3"></div>
                                </div>
                            </div>
                        </div>
                        <div id="popular-listing" className="tab-pane">
                            <div className="listing-wrapper three-column row">
                                <div className="item col-md-4 col-sm-6 col-xs-12">
                                    <div className="listing-item clearfix">
                                        <div className="figure">
                                            <img src="images/listings/270x220/01.jpg" alt="listing item" />
                                            <div className="listing-overlay">
                                                <div className="listing-overlay-inner rgba-bgyallow-1">
                                                    <div className="overlay-content">
                                                        <ul className="listing-links">
                                                            <li><a className="bgwhite nohover" href="#"><i className="fa fa-heart green-1 "></i></a></li>
                                                            <li><a className="bgwhite nohover" href="single-listing.html"><i className="fa fa-shopping-cart blue-1"></i></a></li>
                                                            <li><a className="bgwhite nohover" href="#"><i className="fa fa-share yallow-1"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="listing-content clearfix">
                                            <div className="listing-meta-cat">
                                                <a className="bgyallow-1" href="#"><i className="fa fa-suitcase white"></i></a>
                                            </div>
                                            <div className="listing-title">
                                                <h6><a href="single-listing.html">Looking for a job</a></h6>
                                            </div>
                                            <div className="listing-disc">
                                                <p>Morbi accumsan ipsum velit. Nam nec tellus a odio sit tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. className aptent taciti sociosqu ad litora torquent permis conubia.Morbi accumsan ipsum velit. Nam nec tellus a odio sit tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit.</p>
                                            </div>
                                            <div className="listing-location pull-left">
                                                <a href="#"><i className="fa fa-map-marker"></i> Turkey</a>
                                                <a href="#"><i className="fa fa-map-marker"></i> 163 William Street #2 / New York, NY 10038</a>
                                            </div>
                                            <div className="star-rating pull-right">
                                                <div className="score-callback" data-score="5"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="listing-border-bottom bgyallow-1"></div>
                                </div>
                                <div className="item col-md-4 col-sm-6 col-xs-12">
                                    <div className="listing-item clearfix">
                                        <div className="figure">
                                            <img src="images/listings/270x220/02.jpg" alt="listing item" />
                                            <div className="listing-overlay">
                                                <div className="listing-overlay-inner rgba-bgblue-1">
                                                    <div className="overlay-content">
                                                        <ul className="listing-links">
                                                            <li><a className="bgwhite nohover" href="#"><i className="fa fa-heart green-1 "></i></a></li>
                                                            <li><a className="bgwhite nohover" href="single-listing.html"><i className="fa fa-shopping-cart blue-1"></i></a></li>
                                                            <li><a className="bgwhite nohover" href="#"><i className="fa fa-share yallow-1"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="listing-content clearfix">
                                            <div className="listing-meta-cat">
                                                <a className="bgblue-1" href="#"><i className="fa fa-heart white"></i></a>
                                            </div>
                                            <div className="listing-title">
                                                <h6><a href="single-listing.html">Doctor Available</a></h6>
                                            </div>
                                            <div className="listing-disc">
                                                <p>Morbi accumsan ipsum velit. Nam nec tellus a odio sit tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. className aptent taciti sociosqu ad litora torquent permis conubia.Morbi accumsan ipsum velit. Nam nec tellus a odio sit tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit.</p>
                                            </div>
                                            <div className="listing-location pull-left">
                                                <a href="#"><i className="fa fa-map-marker"></i> Turkey</a>
                                                <a href="#"><i className="fa fa-map-marker"></i> 163 William Street #2 / New York, NY 10038</a>
                                            </div>
                                            <div className="star-rating pull-right">
                                                <div className="score-callback" data-score="5"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="listing-border-bottom bgblue-1"></div>
                                </div>
                                <div className="item col-md-4 col-sm-6 col-xs-12">
                                    <div className="listing-item clearfix">
                                        <div className="figure">
                                            <img src="http://demo.designsvilla.com/html/templates/listing-classNameified/main/images/listings/270x220/03.jpg" alt="listing item" />
                                            <div className="listing-overlay">
                                                <div className="listing-overlay-inner rgba-bggreen-2">
                                                    <div className="overlay-content">
                                                        <ul className="listing-links">
                                                            <li><a className="bgwhite nohover" href="#"><i className="fa fa-heart green-1 "></i></a></li>
                                                            <li><a className="bgwhite nohover" href="single-listing.html"><i className="fa fa-shopping-cart blue-1"></i></a></li>
                                                            <li><a className="bgwhite nohover" href="#"><i className="fa fa-share yallow-1"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="listing-content clearfix">
                                            <div className="listing-meta-cat">
                                                <a className="bggreen-2" href="#"><i className="fa fa-home white"></i></a>
                                            </div>
                                            <div className="listing-title">
                                                <h6><a href="single-listing.html">SALE MY Property</a></h6>
                                            </div>
                                            <div className="listing-disc">
                                                <p>Morbi accumsan ipsum velit. Nam nec tellus a odio sit tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. className aptent taciti sociosqu ad litora torquent permis conubia.Morbi accumsan ipsum velit. Nam nec tellus a odio sit tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit.</p>
                                            </div>
                                            <div className="listing-location pull-left">
                                                <a href="#"><i className="fa fa-map-marker"></i> Turkey</a>
                                                <a href="#"><i className="fa fa-map-marker"></i> 163 William Street #2 / New York, NY 10038</a>
                                            </div>
                                            <div className="star-rating pull-right">
                                                <div className="score-callback" data-score="5"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="listing-border-bottom bggreen-2"></div>
                                </div>
                                <div className="item col-md-4 col-sm-6 col-xs-12">
                                    <div className="listing-item clearfix">
                                        <div className="figure">
                                            <img src="images/listings/270x220/05.jpg" alt="listing item" />
                                            <div className="listing-overlay">
                                                <div className="listing-overlay-inner rgba-bgorange-1">
                                                    <div className="overlay-content">
                                                        <ul className="listing-links">
                                                            <li><a className="bgwhite nohover" href="#"><i className="fa fa-heart green-1 "></i></a></li>
                                                            <li><a className="bgwhite nohover" href="single-listing.html"><i className="fa fa-shopping-cart blue-1"></i></a></li>
                                                            <li><a className="bgwhite nohover" href="#"><i className="fa fa-share yallow-1"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="listing-content clearfix">
                                            <div className="listing-meta-cat">
                                                <a className="bgorange-1" href="#"><i className="fa fa-female white"></i></a>
                                            </div>
                                            <div className="listing-title">
                                                <h6><a href="single-listing.html">Meeting partner</a></h6>
                                            </div>
                                            <div className="listing-disc">
                                                <p>Morbi accumsan ipsum velit. Nam nec tellus a odio sit tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. className aptent taciti sociosqu ad litora torquent permis conubia.Morbi accumsan ipsum velit. Nam nec tellus a odio sit tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit.</p>
                                            </div>
                                            <div className="listing-location pull-left">
                                                <a href="#"><i className="fa fa-map-marker"></i> Turkey</a>
                                                <a href="#"><i className="fa fa-map-marker"></i> 163 William Street #2 / New York, NY 10038</a>
                                            </div>
                                            <div className="star-rating pull-right">
                                                <div className="score-callback" data-score="5"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="listing-border-bottom bgorange-1"></div>
                                </div>
                                <div className="item col-md-4 col-sm-6 col-xs-12">
                                    <div className="listing-item clearfix">
                                        <div className="figure">
                                            <img src="images/listings/270x220/06.jpg" alt="listing item" />
                                            <div className="listing-overlay">
                                                <div className="listing-overlay-inner rgba-bggreen-1">
                                                    <div className="overlay-content">
                                                        <ul className="listing-links">
                                                            <li><a className="bgwhite nohover" href="#"><i className="fa fa-heart green-1 "></i></a></li>
                                                            <li><a className="bgwhite nohover" href="single-listing.html"><i className="fa fa-shopping-cart blue-1"></i></a></li>
                                                            <li><a className="bgwhite nohover" href="#"><i className="fa fa-share yallow-1"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="listing-content clearfix">
                                            <div className="listing-meta-cat">
                                                <a className="bggreen-1" href="#"><i className="fa fa-plane white"></i></a>
                                            </div>
                                            <div className="listing-title">
                                                <h6><a href="single-listing.html">Hotels & Travel</a></h6>
                                            </div>
                                            <div className="listing-disc">
                                                <p>Morbi accumsan ipsum velit. Nam nec tellus a odio sit tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. className aptent taciti sociosqu ad litora torquent permis conubia.Morbi accumsan ipsum velit. Nam nec tellus a odio sit tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit.</p>
                                            </div>
                                            <div className="listing-location pull-left">
                                                <a href="#"><i className="fa fa-map-marker"></i> Turkey</a>
                                                <a href="#"><i className="fa fa-map-marker"></i> 163 William Street #2 / New York, NY 10038</a>
                                            </div>
                                            <div className="star-rating pull-right">
                                                <div className="score-callback" data-score="5"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="listing-border-bottom bggreen-1"></div>
                                </div>
                                <div className="item col-md-4 col-sm-6 col-xs-12">
                                    <div className="listing-item clearfix">
                                        <div className="figure">
                                            <img src="images/listings/270x220/07.jpg" alt="listing item" />
                                            <div className="listing-overlay">
                                                <div className="listing-overlay-inner rgba-bgpurpal-1">
                                                    <div className="overlay-content">
                                                        <ul className="listing-links">
                                                            <li><a className="bgwhite nohover" href="#"><i className="fa fa-heart green-1 "></i></a></li>
                                                            <li><a className="bgwhite nohover" href="single-listing.html"><i className="fa fa-shopping-cart blue-1"></i></a></li>
                                                            <li><a className="bgwhite nohover" href="#"><i className="fa fa-share yallow-1"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="listing-content clearfix">
                                            <div className="listing-meta-cat">
                                                <a className="bgred-1" href="#"><i className="fa fa-cutlery  white"></i></a>
                                            </div>
                                            <div className="listing-title">
                                                <h6><a href="single-listing.html">I need some food</a></h6>
                                            </div>
                                            <div className="listing-disc">
                                                <p>Morbi accumsan ipsum velit. Nam nec tellus a odio sit tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. className aptent taciti sociosqu ad litora torquent permis conubia.Morbi accumsan ipsum velit. Nam nec tellus a odio sit tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit.</p>
                                            </div>
                                            <div className="listing-location pull-left">
                                                <a href="#"><i className="fa fa-map-marker"></i> Turkey</a>
                                                <a href="#"><i className="fa fa-map-marker"></i> 163 William Street #2 / New York, NY 10038</a>
                                            </div>
                                            <div className="star-rating pull-right">
                                                <div className="score-callback" data-score="5"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="listing-border-bottom bgred-1"></div>
                                </div>
                                <div className="item col-md-4 col-sm-6 col-xs-12">
                                    <div className="listing-item clearfix">
                                        <div className="figure">
                                            <img src="images/listings/270x220/08.jpg" alt="listing item" />
                                            <div className="listing-overlay">
                                                <div className="listing-overlay-inner rgba-bgorange-1">
                                                    <div className="overlay-content">
                                                        <ul className="listing-links">
                                                            <li><a className="bgwhite nohover" href="#"><i className="fa fa-heart green-1 "></i></a></li>
                                                            <li><a className="bgwhite nohover" href="single-listing.html"><i className="fa fa-shopping-cart blue-1"></i></a></li>
                                                            <li><a className="bgwhite nohover" href="#"><i className="fa fa-share yallow-1"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="listing-content clearfix">
                                            <div className="listing-meta-cat">
                                                <a className="bgbrown-1" href="#"><i className="fa fa-paw white"></i></a>
                                            </div>
                                            <div className="listing-title">
                                                <h6><a href="single-listing.html">i love my pet</a></h6>
                                            </div>
                                            <div className="listing-disc">
                                                <p>Morbi accumsan ipsum velit. Nam nec tellus a odio sit tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. className aptent taciti sociosqu ad litora torquent permis conubia.Morbi accumsan ipsum velit. Nam nec tellus a odio sit tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit.</p>
                                            </div>
                                            <div className="listing-location pull-left">
                                                <a href="#"><i className="fa fa-map-marker"></i> Turkey</a>
                                                <a href="#"><i className="fa fa-map-marker"></i> 163 William Street #2 / New York, NY 10038</a>
                                            </div>
                                            <div className="star-rating pull-right">
                                                <div className="score-callback" data-score="5"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="listing-border-bottom bgbrown-1"></div>
                                </div>
                                <div className="item col-md-4 col-sm-6 col-xs-12">
                                    <div className="listing-item clearfix">
                                        <div className="figure">
                                            <img src="images/listings/270x220/04.jpg" alt="listing item" />
                                            <div className="listing-overlay">
                                                <div className="listing-overlay-inner rgba-bgpurpal-1">
                                                    <div className="overlay-content">
                                                        <ul className="listing-links">
                                                            <li><a className="bgwhite nohover" href="#"><i className="fa fa-heart green-1 "></i></a></li>
                                                            <li><a className="bgwhite nohover" href="single-listing.html"><i className="fa fa-shopping-cart blue-1"></i></a></li>
                                                            <li><a className="bgwhite nohover" href="#"><i className="fa fa-share yallow-1"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="listing-content clearfix">
                                            <div className="listing-meta-cat">
                                                <a className="bgpurpal-1" href="#"><i className="fa fa-eye white"></i></a>
                                            </div>
                                            <div className="listing-title">
                                                <h6><a href="single-listing.html">Beauty & Spas</a></h6>
                                            </div>
                                            <div className="listing-disc">
                                                <p>Morbi accumsan ipsum velit. Nam nec tellus a odio sit tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. className aptent taciti sociosqu ad litora torquent permis conubia.Morbi accumsan ipsum velit. Nam nec tellus a odio sit tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit.</p>
                                            </div>
                                            <div className="listing-location pull-left">
                                                <a href="#"><i className="fa fa-map-marker"></i> Turkey</a>
                                                <a href="#"><i className="fa fa-map-marker"></i> 163 William Street #2 / New York, NY 10038</a>
                                            </div>
                                            <div className="star-rating pull-right">
                                                <div className="score-callback" data-score="5"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="listing-border-bottom bgpurpal-1"></div>
                                </div>
                                <div className="item col-md-4 col-sm-6 col-xs-12">
                                    <div className="listing-item clearfix">
                                        <div className="figure">
                                            <img src="images/listings/270x220/09.jpg" alt="listing item" />
                                            <div className="listing-overlay">
                                                <div className="listing-overlay-inner rgba-bgblue-3">
                                                    <div className="overlay-content">
                                                        <ul className="listing-links">
                                                            <li><a className="bgwhite nohover" href="#"><i className="fa fa-heart green-1 "></i></a></li>
                                                            <li><a className="bgwhite nohover" href="single-listing.html"><i className="fa fa-shopping-cart blue-1"></i></a></li>
                                                            <li><a className="bgwhite nohover" href="#"><i className="fa fa-share yallow-1"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="listing-content clearfix">
                                            <div className="listing-meta-cat">
                                                <a className="bgblue-3" href="#"><i className="fa fa-wrench white"></i></a>
                                            </div>
                                            <div className="listing-title">
                                                <h6><a href="single-listing.html">Hotels & Travel</a></h6>
                                            </div>
                                            <div className="listing-disc">
                                                <p>Morbi accumsan ipsum velit. Nam nec tellus a odio sit tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. className aptent taciti sociosqu ad litora torquent permis conubia.Morbi accumsan ipsum velit. Nam nec tellus a odio sit tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit.</p>
                                            </div>
                                            <div className="listing-location pull-left">
                                                <a href="#"><i className="fa fa-map-marker"></i> Turkey</a>
                                                <a href="#"><i className="fa fa-map-marker"></i> 163 William Street #2 / New York, NY 10038</a>
                                            </div>
                                            <div className="star-rating pull-right">
                                                <div className="score-callback" data-score="5"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="listing-border-bottom bgblue-3"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}


export default ListingSection;