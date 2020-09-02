import React from "react";

const LocationWidget = () => {
    return (
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
    )
}

export default LocationWidget;