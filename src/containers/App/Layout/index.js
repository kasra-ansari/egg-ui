import React from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

const Layout = props => (
	<div className="theme-wrap clearfix">
		<div className="wsmenucontent overlapblackbg" />
		
		<div className="wsmenuexpandermain slideRight">
			<a href="#something" id="navToggle" className="animated-arrow slideLeft"><span></span></a>
			<a href="#somnthing" className="smallogo"><img src="images/logo.png.html" width="120" alt="" /></a>
		</div>

		
		<Header />

		{
			props.children
		}

		<Footer />
	</div>
)

export default Layout;