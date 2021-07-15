import React, { Component } from "react";
export default class Menu extends Component {
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
          <button class="bg-black hover:bg-red-400 text-white font-bold py-2 px-4  mt-4 -ml-6 rounded">
            Let's Talk
          </button>
        </div>
    
      </>
    );
  }
}
