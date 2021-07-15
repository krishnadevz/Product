import React, { Component } from "react";
import PropTypes from "prop-types";
import Shoes from "./images/shoes.jpg";
import Play from "../svg/play";
export default class Products extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  render() {
    return (
      <>
        
        <div>
          <img
            className="float-right h-screen -mt-40 mr-20"
            src={Shoes}
            alt="shoes"
          />
        </div>
        <div>
        <Play/>
        </div>
      </>
    );
  }
}
