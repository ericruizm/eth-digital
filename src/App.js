import React, { PureComponent } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { connect } from 'react-redux';
// import { getToken, initAxiosInterceptors } from './store/helpers/tokenHelper';
import { LogoutRoutes, LoginRoutes } from './routes/EagleRoutes';
// import { whoiam } from './store/services/userServices';
// import { actionStoreCurrentUser } from './store/Actions';

class App extends PureComponent {
  componentDidMount = () => {
    /**  const { token, currentAdmin, setCurrentUser } = this.props;
    console.log('token', token);
    console.log('currentAdmin', currentAdmin);
    initAxiosInterceptors();

    async function cargarUsuario() {
      if (!getToken()) {
        // setCargandoUsuario(false);
        return;
      }
      try {
        const { data } = await whoiam();
        console.log('HAY TOKEN', data);
        setCurrentUser(data.user);
        // setCargandoUsuario(false);
      } catch (error) {
        console.log(error);
      }
    }

    cargarUsuario(); */
  };

  render() {
    const { token, currentUser } = this.props;
    console.log('token', token);
    console.log('currentAdmin', currentUser);
    return (
      <Router>
        <div className="App">
          <LoginRoutes />
        </div>
      </Router>
    );
  }
}

// make this component available to the app
const mapStateToProps = (state) => ({
  /** token: state.reducerAdminSession,
  currentUser: state.reducerCurrentUser, */
});

const mapDispatchToProps = (dispatch) => ({
  /** setCurrentUser: (user) => {
    dispatch(actionStoreCurrentUser(user));
  }, */
});
// make this component available to the app
export default connect(mapStateToProps, mapDispatchToProps)(App);
