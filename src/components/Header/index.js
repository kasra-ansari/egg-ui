import React from "react";

const Header = () => {
    return (
        <div className="header">
            <div className="top-toolbar">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-12 col-xs-12 pull-left">
                            <div className="social-content">
                                <ul className="social-links">
                                    <li><a className="linkedin" href="#somthing" target="_blank"><i className="fa fa-linkedin"></i></a></li>
                                    <li><a className="twitter" href="#somthing" target="_blank"><i className="fa fa-twitter"></i></a></li>
                                    <li><a className="facebook" href="#somthing" target="_blank"><i className="fa fa-facebook"></i></a></li>
                                    <li><a className="youtube" href="#somthing" target="_blank"><i className="fa fa-youtube"></i></a></li>
                                    <li><button className="login" data-toggle="modal" data-target="#login">login</button></li>
                                    <li><button className="register" data-toggle="modal" data-target="#register">register</button></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12 col-xs-12 pull-right">
                            <div className="top-contact-info">
                                <ul>
                                    <li className="toolbar-email"><i className="fa fa-envelope-o"></i> Support@designsvilla.com</li>
                                    <li className="toolbar-contact"><i className="fa fa-phone"></i> +92 123 456 7890</li>
                                    <li><a className="toolbar-new-listing" href="#somthing"><i className="fa fa-plus-circle"></i> Add Listing</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="nav-wrapper">
                <div className="container">
                    <nav className="wsmenu slideLeft clearfix">
                        <div className="logo pull-left"><a href="#somthing" title="Responsive Slide Menus"><img src="images/logo.png.html" alt="" /></a></div>
                        <ul className="mobile-sub wsmenu-list pull-right">
                            <li><a href="#somthing"className="">Home</a>
                                <ul className="wsmenu-submenu">
                                    <li><a href="#somthing">Home 1</a></li>
                                </ul>
                            </li>
                            <li><a href="#somthing"className="">Home</a>
                                <ul className="wsmenu-submenu">
                                    <li><a href="#somthing">Home 1</a></li>
                                </ul>
                            </li>
                            <li><a href="#somthing"className="">Home</a>
                                <ul className="wsmenu-submenu">
                                    <li><a href="#somthing">Home 1</a></li>
                                </ul>
                            </li>
                            <li><a href="#somthing"className="">Home</a>
                                <ul className="wsmenu-submenu">
                                    <li><a href="#somthing">Home 1</a></li>
                                </ul>
                            </li>
                            <li><a href="#somthing">pages <span className="arrow"></span></a>
                                <ul className="wsmenu-submenu">
                                    <li><a href="#somthing">Features <span className="arrow"></span></a></li>

                                </ul>
                            </li>
                            <li><a href="#somthing">Contact Us <span className="arrow"></span></a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}


export default Header;