import React from "react";

const Footer = () => {
    return (
        <footer className="footer style-1 padding-top-60 bg222">
			<div className="container">
				<div className="footer-main padding-bottom-10">
					<div className="row">
						<div className="col-md-4 col-sm-4 col-xs-12 margin-bottom-30">
							<div className="footer-widget-title">
								<h5>LATEST NEWS</h5>
							</div>
							<div className="footer-logo">
								<a href="#"><img src="images/footer-logo.png" alt="footer logo" /></a>
							</div>
							<div className="footer-intro">
								<p>Lorem ipsum dolor sit amet sectetuer
									esl adipiscing elit sed diam nonummy
									nibhi euismod tincidunt ut laoreet
									dolore amet magna.
								</p>
								<a href="about.html">read more</a>
							</div>
						</div>
						<div className="col-md-4 col-sm-4 col-xs-12 margin-bottom-30">
							<div className="footer-widget-title">
								<h5>recent posts</h5>
							</div>
							<div className="footer-recent-post-widget">
								<div className="footer-recent-post clearfix">
									<div className="footer-recent-post-figure">
										<img src="images/news/thumb/100/01.jpg" alt="recent post"/>
									</div>
									<div className="footer-recent-post-content">
										<div className="footer-recent-post-title">
											<a href="#">Hello classNameified Listing</a>
										</div>
										<div className="footer-recent-post-disc">
											<p>Welcome to listing</p>
										</div>
										<div className="footer-recent-post-caption">
											<p className="date">07 Sep, 2015</p>
										</div>
									</div>
								</div>
								<div className="footer-recent-post clearfix">
									<div className="footer-recent-post-figure">
										<img src="images/news/thumb/100/01.jpg" alt="recent post"/>
									</div>
									<div className="footer-recent-post-content">
										<div className="footer-recent-post-title">
											<a href="#">Hello classNameified Listing</a>
										</div>
										<div className="footer-recent-post-disc">
											<p>Welcome to listing</p>
										</div>
										<div className="footer-recent-post-caption">
											<p className="date">07 Sep, 2015</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4 col-sm-4 col-xs-12 margin-bottom-30">
							<div className="footer-widget-title">
								<h5>Flikr Photos</h5>
							</div>
							<div className="footer-flikr-widget">
								<ul className="flikr-list clearfix">
									<li><a href="#h"><img src="images/news/flikr/01.jpg" alt="flikr photo"/></a></li>
									<li><a href="#h"><img src="images/news/flikr/02.jpg" alt="flikr photo"/></a></li>
									<li><a href="#h"><img src="images/news/flikr/03.jpg" alt="flikr photo"/></a></li>
									<li><a href="#h"><img src="images/news/flikr/04.jpg" alt="flikr photo"/></a></li>
									<li><a href="#h"><img src="images/news/flikr/05.jpg" alt="flikr photo"/></a></li>
									<li><a href="#h"><img src="images/news/flikr/06.jpg" alt="flikr photo"/></a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="footer-bottom">
				<div className="container">
					<div className="row clearfix">
						<div className="col-md-8 col-sm-12 col-xs-12 pull-right margin-bottom-20">
							<nav className="footer-menu wsmenu clearfix">
								<ul className="wsmenu-list pull-right">
								  <li><a href="#" className="">Home</a></li>
								  <li><a href="#">features <span className="arrow"></span></a></li>
								  <li><a href="#">categories <span className="arrow"></span></a></li>
								  <li><a href="#">listings <span className="arrow"></span></a></li>
								  <li><a href="#">pages <span className="arrow"></span></a></li>
								  <li><a href="#">Contact Us <span className="arrow"></span></a></li>
								</ul>
							</nav>
						</div>
						<div className="col-md-4 col-sm-12 col-xs-12 pull-left margin-bottom-20">
							<div className="footer-copyright">
								<p>&copy; 2016 All Rights Reserved @ <a href="http://designsvilla.com" target="_blank">Designsvilla</a></p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
    )
}

export default Footer;