import React from "react";

const SearchForm = () => {
    return (
        <section id="search-form">
			<div className="container">
				<div className="search-form-wrap">
					<form className="clearfix" action="#">
						<div className="input-field-wrap pull-right">
							<input className="search-form-input" name="key-word" placeholder="کلمه مورد نظر" type="text"/>
						</div>
						<div className="select-field-wrap pull-right">
							<select className="search-form-select" name="location" >
								<option className="options" value="all-locations">همه مکان‌ها</option>
								<option className="options" value="america">America</option>
								<option className="options" value="canada">Canada</option>
								<option className="options" value="france">France</option>
								<option className="options" value="germane ">germane</option>
								<option className="options" value="russia">Russia</option>
								<option className="options" value="china">china</option>
							</select>
						</div>
						<div className="select-field-wrap pull-right">
							<select className="search-form-select" name="categories" >
								<option className="options" value="all-categories">همه دسته‌بندی‌ها</option>
								<option className="options" value="america">business</option>
								<option className="options" value="canada">free lancing</option>
								<option className="options" value="france">web development</option>
								<option className="options" value="germane ">designing</option>
								<option className="options" value="russia">wordpress</option>
								<option className="options" value="china">bootstrap</option>
							</select>
						</div>
						<div className="submit-field-wrap pull-right">
							<button className="search-form-submit bgyallow-1 white">ارسال</button>
							{/* <input className="search-form-submit bgyallow-1 white" name="key-word" type="submit"/> */}
						</div>
					</form>
				</div>
			</div>
		</section>
    )
}

export default SearchForm;