import React, { Component } from 'react'
import Shoes from "./images/shoes.jpg";
import { Link } from "react-router-dom";
export default class Product1 extends Component {
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

        <div>
          <img
            className="float-right h-screen -mt-40 w-1/2 mr-20"
            src={Shoes}
            alt="shoes"
          />
        </div>
        <div>

        </div>
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
          <p className="text-2xl font-bold text-black ">Nike Shoes</p>
          
          <p >Nike, Inc is an American multinational corporation that is engaged in the design, development, manufacturing, and worldwide marketing and sales of footwear</p>
          <Link target={"_blank"}to="/product1" without rel="noopener noreferrer"  >
          <button class="bg-black hover:bg-red-400 text-white font-bold py-2 px-4  mt-4 -ml-6 rounded">
            Next 
          </button>
          </Link>
            </div>
      </>
        )
    }
}
