import React from "react";

const CategoryWidget = () => {
    return (
        <div className="sidebar-widget shadow-1">
            <div className="sidebar-widget-title">
                <h5><span className="bgyallow-1"></span>دسته‌بندی‌ها</h5>
            </div>
            <div className="sidebar-widget-content category-widget clearfix">
                <div className="sidebar-category-widget-wrap">
                    <ul>
                        <li><a href="#1"><i className="fa fa-heart bgblue-1 white"></i> ورزش و سلامتی <span>(8)</span></a></li>
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
    )
}

export default CategoryWidget;