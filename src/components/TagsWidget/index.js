import React from "react";

const TagsWidget = () => {
    return (
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
    )
}

export default TagsWidget;