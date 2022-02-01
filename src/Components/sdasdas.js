import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CssTemplate/HomePageCss.css';  
import { useState } from 'react';
import { useEffect } from 'react';
import dummy from  "../dummyAPI";
import '../CssTemplate/asdasd.css';  

const NewComponent = () => {
    return (
        <div>
          {/* Created By CodingLab - www.codinglabweb.com */}
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          {/*---<title>Responsive Profile Cards | CodingLab</title>---*/}
          <link rel="stylesheet" href="style.css" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" />
          <div className="container">
            <div className="box">
              <div className="image">
                {/*---<img src="img1.jpeg">-----*/}
              </div>
              <div className="name_job">David Chrish</div>
              <div className="rating">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="far fa-star" />
                <i className="far fa-star" />
                <i className="far fa-star" />
              </div>
              <p> Lorem ipsum dolor sitamet, stphen hawkin so adipisicing elit. Ratione disuja doloremque reiciendi nemo.</p>
              <div className="btns">
                <button>Read More</button>
                <button>Subscribe</button>
              </div>
            </div>
            <div className="box">
              <div className="image">
                {/*----  <img src="img2.jpeg" alt="">-*/}
              </div>
              <div className="name_job">Kristina Bellis</div>
              <div className="rating">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="far fa-star" />
                <i className="far fa-star" />
              </div>
              <p> Lorem ipsum dolor sitamet, stphen hawkin so adipisicing elit. Ratione disuja doloremque reiciendi nemo.</p>
              <div className="btns">
                <button>Read More </button>
                <button>Subscribe</button>
              </div>
            </div>
            <div className="box">
              <div className="image">
                {/*-- <img src="img3.jpeg" alt="">--*/}
              </div>
              <div className="name_job">Stephen Marlo</div>
              <div className="rating">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="far fa-star" />
              </div>
              <p> Lorem ipsum dolor sitamet, stphen hawkin so adipisicing elit. Ratione disuja doloremque reiciendi nemo.</p>
              <div className="btns">
                <button>Read More</button>
                <button>Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      );
}

export default NewComponent