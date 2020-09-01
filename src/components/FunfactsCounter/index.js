import React from "react";

const FunfactsCounter = () => {
    return (
        <section id="funfact" className=" padding-top-150 padding-bottom-100" >
			<div className="container">
				<div className="row padding-bottom-20" id="funfact-1">
					<div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 margin-bottom-30 text-center clearfix">
						<div className="funfact-1 color-1  clearfix">
							<div className="fun-wrap">
								<div className="count" id="items" data-to="160" data-speed="4000">160</div>
								<div className="funfact-divider"></div>
								<div className="funfact"><p> items</p></div>
							</div>
						</div>
					</div>
					<div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 margin-bottom-30 text-center clearfix">
						<div className="funfact-1 color-1  clearfix">
							<div className="fun-wrap">
								<div className="count" id="locations" data-to="210" data-speed="4000">210</div>
								<div className="funfact-divider"></div>
								<div className="funfact"><p> locations</p></div>
							</div>
						</div>
					</div>  				
					<div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 margin-bottom-30 text-center clearfix">
						<div className="funfact-1 color-1  clearfix">
							<div className="fun-wrap">
								<div className="count" id="projects" data-to="795" data-speed="4000">795</div>
								<div className="funfact-divider"></div>
								<div className="funfact"><p> projects</p></div>
							</div>
						</div>
					</div>
					<div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 margin-bottom-30 text-center clearfix">
						<div className="funfact-1 color-1  clearfix">
							<div className="fun-wrap">
								<div className="count" id="event" data-to="158" data-speed="4000">158</div>
								<div className="funfact-divider"></div>
								<div className="funfact"><p> event</p></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
    )
}

export default FunfactsCounter;