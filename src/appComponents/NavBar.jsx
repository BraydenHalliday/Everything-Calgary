import React, { Component } from "react";
import PropTypes from "prop-types";
import Autocomplete from "./navBarComponents/Autocomplete.jsx";
import suggestions from "../../helper/communities.js";

class NavBar extends Component {
  render() {
    const checkCommunity = event => {
      event.preventDefault();
      let content = event.target.elements[0].value;
      if (suggestions.includes(content.toUpperCase())) {
        this.props.updateCommunity(content);
      } else {
        alert("Community does not exist!");
      }
    };
    if (this.props.jumbotron === false && this.props.calgary === false) {
      return (
        <nav className="navbar fixed navbar-light">
          <section>
            
          <a className="navbar-brand" href='https://www.greatstairs.com/'>
            <img id="logo" src="../../../public/images/SSR_Logo_Black2.png" alt="logo" />{" "}
          </a>
        
          </section>
          <section>
            <form className="form-inline" onSubmit={checkCommunity}>
              <Autocomplete
                className="form-control mr-sm-2"
                type="search"
                suggestions={suggestions}
                community={this.props.community}
              />
              <button
                className="btn btn-outline-danger my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </section>
        </nav>
      );
    } else if (this.props.calgary === true){
      return (
        <nav className="navbar fixed navbar-light">
           <a className="navbar-brand" href='https://www.greatstairs.com/'>
            <img id="logo" src="../../../public/images/SSR_Logo_Black2.png" alt="logo" />{" "}
          </a>
          <section>
            <form className="form-inline" onSubmit={checkCommunity}>
              <Autocomplete
                className="form-control mr-sm-2"
                type="search"
                suggestions={suggestions}
                community={this.props.community}
              />
              <button
                className="btn btn-outline-danger my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </section>
        </nav>
      );
    } else {
      return (
        <nav className="navbar fixed sticky-top navbar-light">
          <a className="navbar-brand" href='https://www.greatstairs.com/'>
            <img id="logo-Jumbo" src="../../../public/images/SSR_Logo_Black2.png" alt="logo" />{" "}
          </a>
   
        </nav>
      );
    }
  }
}

export default NavBar;
