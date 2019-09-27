import React, {Component} from 'react';
import {BrowserRouter, Route, withRouter} from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
// import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
// import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initialiseApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";
import {withSuspense} from "./hoc/withSuspense";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));


class App extends Component {
    componentDidMount() {
        this.props.initialiseApp();
    }

    render() {
        if (!this.props.initialised) {
            return <Preloader/>;
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path="/dialogs"
                           render={withSuspense(DialogsContainer)}/>
                    <Route path="/profile/:userId?"
                           render={withSuspense(ProfileContainer)}/>
                    <Route path="/users"
                           render={() => <UsersContainer/>}/>
                    <Route path="/login"
                           render={() => <Login/>}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialised: state.app.initialised
});

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initialiseApp})
)(App);

const MainApp = (props) => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
};
export default MainApp;

