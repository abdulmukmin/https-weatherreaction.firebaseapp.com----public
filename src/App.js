import React, { Component } from 'react';
import './App.css';
import { Provider } from "react-redux"
import Layout from "./views/Layout"
import store from "./store/index";
import { clickDetail } from "./actions/index";

class App extends Component {
  clickDetail = () => {
    this.setState({
      isDetailClicked: true
    })
  }

  render() {
    return (
      <div className="App">
          <Provider store={store}>
            <Layout />
          </Provider>
      </div>
    );
  }
}

window.store = store
window.clickDetail = clickDetail

export default App;
