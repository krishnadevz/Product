import React, { Component } from "react";
import PropTypes from "prop-types";
import Shoes from "./images/shoes.jpg";
import { Link } from "react-router-dom";

export default class Products extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  render() {
    return (
      <>
        <div className="ml-20 mt-10">
          <svg viewBox="0 0 100 20" width="40" height="40">
            <rect width="100" height="20"></rect>
            <rect y="30" width="100" height="20"></rect>
            <rect y="60" width="100" height="20"></rect>
          </svg>
          <p className=" text-2xl font-bold ml-20 -mt-7">Products</p>
          <button class="bg-black hover:bg-red-400 text-white font-bold py-2 px-4  mt-4 -ml-12 rounded">
            Let's Talk
          </button>
        </div>

        <div>
          <img
            className="float-right h-screen -mt-40 mr-20"
            src={Shoes}
            alt="shoes"
          />
        </div>
        <div></div>
        <div className=" mt-48 ml-96 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="currentColor"
            class="bi bi-play-circle-fill"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
          </svg>
          <p className="text-xl font-bold mt-11">Strategy UI UX. June 4 2021</p>
          <p className="text-5xl font-bold text-black mt-11">Nike Shoes</p>

          <p className="mt-8 mb-4">
            Nike, Inc is an American multinational corporation that is engaged
            in the design, development, manufacturing, and worldwide marketing
            and sales of footwear
          </p>
          <Link
            className=" text-black   font-bold  mt-  -ml-1  "
            target={"_blank"}
            to="/product1"
            without
            rel="noopener noreferrer"
          >
            Show Project
            <svg
            className="ml-28 -mt-6"
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
            >
              <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
            </svg>
          </Link>
        </div>
      </>
    );
  }
}
