import React from "react";

const CategoryWidget = () => {
    return (
        <div className="col-md-3 col-sm-4 col-xs-12">
            <div className="sidebar sidebar-wrap">
                <div className="sidebar-widget shadow-1">
                    <div className="sidebar-widget-title">
                        <h5><span className="bgyallow-1"></span>category list</h5>
                    </div>
                    <div className="sidebar-widget-content category-widget clearfix">
                        <div className="sidebar-category-widget-wrap">
                            <ul>
                                <li><a href="#1"><i className="fa fa-heart bgblue-1 white"></i> Health & fitness <span>(8)</span></a></li>
                                <li><a href="#1"><i className="fa fa-plane bggreen-1 white"></i> Hotels & Travel <span>(5)</span></a></li>
                                <li><a href="#1"><i className="fa fa-eye bgpurpal-1 white"></i> Beauty & Spas <span>(7)</span></a></li>
                                <li><a href="#2"><i className="fa fa-suitcase bgyallow-1 white"></i> Jobs<span>(5)</span></a></li>
                                <li><a href="#2"><i className="fa fa-wrench bgblue-3 white"></i> Home Services <span>(2)</span></a></li>
                                <li><a href="#3"><i className="fa fa-female bgorange-1 white"></i> entertainment <span>(4)</span></a></li>
                                <li><a href="#4"><i className="fa fa-home bggreen-2 white"></i> real estate<span>(5)</span></a></li>
                                <li><a href="#5"><i className="fa fa-cutlery bgred-1 white"></i> food <span>(8)</span></a></li>
                                <li><a href="#6"><i className="fa fa-github bgbrown-1 white"></i> pets <span>(5)</span></a></li>
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
                                <li><a className="nohover" href="#1"><i className="fa fa-map-marker blue-1"></i> new york <span>(4)</span></a></li>
                                <li><a className="nohover" href="#2"><i className="fa fa-map-marker blue-1"></i> Kansas <span>(6)</span></a></li>
                                <li><a className="nohover" href="#3"><i className="fa fa-map-marker blue-1"></i> Nevada <span>(8)</span></a></li>
                                <li><a className="nohover" href="#4"><i className="fa fa-map-marker blue-1"></i> New Mexico<span>(4)</span></a></li>
                                <li><a className="nohover" href="#5"><i className="fa fa-map-marker blue-1"></i> South Carolina <span>(4)</span></a></li>
                                <li><a className="nohover" href="#6"><i className="fa fa-map-marker blue-1"></i> West Virginina <span>(6)</span></a></li>
                                <li><a className="nohover" href="#7"><i className="fa fa-map-marker blue-1"></i> Holloway<span>(8)</span></a></li>
                                <li><a className="nohover" href="#8"><i className="fa fa-map-marker blue-1"></i> Broomley <span>(4)</span></a></li>
                                <li><a className="nohover" href="#9"><i className="fa fa-map-marker blue-1"></i> Lankashire<span>(4)</span></a></li>
                                <li><a className="nohover" href="#10"><i className="fa fa-map-marker blue-1"></i> Manchester<span>(6)</span></a></li>
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
                                <li><a href="#1">food</a></li>
                                <li><a href="#2">Marriage</a></li>
                                <li><a href="#3">Electronics</a></li>
                                <li><a href="#4">car</a></li>
                                <li><a href="#5">house</a></li>
                                <li><a href="#6">events</a></li>
                                <li><a href="#7">business</a></li>
                                <li><a href="#8">job</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CategoryWidget;