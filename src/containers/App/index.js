import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
// import { PrivateRoute } from "../../components/PrivateRoute";
import MainPage from '../mainPage/index';

const mapStateToProps = (state) => (
    {
        isLogin: state.app.isLogin,
    }
);

@connect(mapStateToProps)
class App extends Component {
    render() {
        return (
            <div>
                <Route exact path={`/`} component={MainPage} />
            </div>
            // <Suspense fallback={<Loading />}>
            //         {/* <LayoutSwitcher condition={this.props.isLogin}> */}
            //             <Route exact path={`/`} component={MainPage}>

            //             {/* <PrivateRoute exact path={`/stocks`} component={Stocks} /> */}
            //             {/* <PrivateRoute path={`/stocks/order`} component={AlgorithmOrder} /> */}
            //             <Route path={`/login`} component={Login} />
            //             {/*<Route path="*" component={NotFoundPage}/>*/}
            //         {/* </LayoutSwitcher> */}
            //     </Suspense>
        )
    }
}


export default App;
