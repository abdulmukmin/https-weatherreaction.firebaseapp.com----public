import React from "react";
import SearchCity from "../views/SearchCity";
import DetailPage from "../views/detail";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import { connect } from "react-redux"
import NavBar from "../components/navbar"
import DetailVenue from "../views/DetailVenue"
import NotFoundPage from "../views/NotFound";

const mapStateToProps = state => {
    return { isDetailClicked: state.routingChecker.isDetailClicked }
}

class Layout extends React.Component {
  render() {
        return (
            <Router>
              <div>
                <NavBar />
                <Switch>
                <Route
                  exact
                  path="/" 
                  render={(props) => (
                      <SearchCity
                        {...props}
                        clickDetail={() => this.clickDetail()}
                      />
                  )}
                />
                
                <Route 
                  path="/detailVenue/:city"
                  exact
                  render={(props) => (
                    this.props.isDetailClicked ? (
                      <DetailVenue
                        {...props}
                      />
                    ) : (
                      <Redirect to="/"></Redirect>
                    )
                  )}
                />
                <Route 
                  path="/detail/:city" 
                  exact
                  render={(props) => (
                    this.props.isDetailClicked ? (
                      <DetailPage 
                        {...props}
                      />
                    ) : (
                      <Redirect to="/"></Redirect>
                    )
                )}/>
                <Route 
                  component={NotFoundPage}
                />
                </Switch>
              </div>
          </Router>
        )
    }
}

export default connect(mapStateToProps, null)(Layout);