import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { authApi } from "../../api";
import HomePresenter from "./HomePresenter";
import { LOGIN_FAILED, LOGIN_SUCCESS } from "../../redux/types";

const Home = (homeProps) => {
  const { state, setError, success } = homeProps;

  async function checkAuth() {
    try {
      const res = await authApi.checkAuth();
      const user = await res.data.user;
      success({ user: user.email, name: user.name });
    } catch (error) {
      if (error.response.status === 401) {
        setError("");
      } else {
        console.log(error);
      }
    }
  }

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <>{state.isAuthenticated ? <Redirect to="/tasks" /> : <HomePresenter />}</>
  );
};

function mapStateToProps(state) {
  return { state: state.authReducer };
}

function mapDispatchToProps(dispatch) {
  return {
    setError: (error) => {
      dispatch({ type: LOGIN_FAILED, payload: error });
    },
    success: (user) => {
      dispatch({ type: LOGIN_SUCCESS, payload: user });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
