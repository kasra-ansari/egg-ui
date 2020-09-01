import React from "react";

const CategoryWidget = () => {
    return (
        <section className="aside-layout-section padding-bottom-40">
            <div className="container">
				<div className="row">
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
                                                        <li className="gridview"><i className="fa fa-th"></i></li>
                                                        <li className="listview active"><i className="fa fa-th-list"></i></li>
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
                    <div className="col-md-3 col-sm-4 col-xs-12">
						<div className="sidebar sidebar-wrap">
                            <div className="sidebar-widget shadow-1">
                                <div className="sidebar-widget-title">
                                    <h5><span className="bgyallow-1"></span>category list</h5>
                                </div>
                                <div className="sidebar-widget-content category-widget clearfix">
                                    <div className="sidebar-category-widget-wrap">
                                        <ul>
                                            <li><a href="#"><i className="fa fa-heart bgblue-1 white"></i> Health & fitness <span>(8)</span></a></li>
                                            <li><a href="#"><i className="fa fa-plane bggreen-1 white"></i> Hotels & Travel <span>(5)</span></a></li>
                                            <li><a href="#"><i className="fa fa-eye bgpurpal-1 white"></i> Beauty & Spas <span>(7)</span></a></li>
                                            <li><a href="#"><i className="fa fa-suitcase bgyallow-1 white"></i> Jobs<span>(5)</span></a></li>
                                            <li><a href="#"><i className="fa fa-wrench bgblue-3 white"></i> Home Services <span>(2)</span></a></li>
                                            <li><a href="#"><i className="fa fa-female bgorange-1 white"></i> entertainment <span>(4)</span></a></li>
                                            <li><a href="#"><i className="fa fa-home bggreen-2 white"></i> real estate<span>(5)</span></a></li>
                                            <li><a href="#"><i className="fa fa-cutlery bgred-1 white"></i> food <span>(8)</span></a></li>
                                            <li><a href="#"><i className="fa fa-github bgbrown-1 white"></i> pets <span>(5)</span></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="sidebar-widget shadow-1">
                                <div className="sidebar-widget-title">
                                    <h5><span className="bgpurpal-1"></span>location list</h5>
                                </div>
                                <div className="sidebar-widget-content location-widget clearfix">
                                    <div className="sidebar-location-widget-wrap">
                                        <ul>
                                            <li><a className="nohover" href="#"><i className="fa fa-map-marker blue-1"></i> new york <span>(4)</span></a></li>
                                            <li><a className="nohover" href="#"><i className="fa fa-map-marker blue-1"></i> Kansas <span>(6)</span></a></li>
                                            <li><a className="nohover" href="#"><i className="fa fa-map-marker blue-1"></i> Nevada <span>(8)</span></a></li>
                                            <li><a className="nohover" href="#"><i className="fa fa-map-marker blue-1"></i> New Mexico<span>(4)</span></a></li>
                                            <li><a className="nohover" href="#"><i className="fa fa-map-marker blue-1"></i> South Carolina <span>(4)</span></a></li>
                                            <li><a className="nohover" href="#"><i className="fa fa-map-marker blue-1"></i> West Virginina <span>(6)</span></a></li>
                                            <li><a className="nohover" href="#"><i className="fa fa-map-marker blue-1"></i> Holloway<span>(8)</span></a></li>
                                            <li><a className="nohover" href="#"><i className="fa fa-map-marker blue-1"></i> Broomley <span>(4)</span></a></li>
                                            <li><a className="nohover" href="#"><i className="fa fa-map-marker blue-1"></i> Lankashire<span>(4)</span></a></li>
                                            <li><a className="nohover" href="#"><i className="fa fa-map-marker blue-1"></i> Manchester<span>(6)</span></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="sidebar-widget shadow-1">
                                <div className="sidebar-widget-title">
                                    <h5><span className="bggreen-2"></span>Item tags</h5>
                                </div>
                                <div className="sidebar-widget-content tags  clearfix">
                                    <div className="sidebar-tag-cloud">
                                        <ul>
                                            <li><a href="#">food</a></li>
                                            <li><a href="#">Marriage</a></li>
                                            <li><a href="#">Electronics</a></li>
                                            <li><a href="#">car</a></li>
                                            <li><a href="#">house</a></li>
                                            <li><a href="#">events</a></li>
                                            <li><a href="#">business</a></li>
                                            <li><a href="#">job</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CategoryWidget;