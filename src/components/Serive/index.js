import React from "react";
import './Service.css';
import Header from "../Header";
import { AiOutlineShoppingCart } from "react-icons/ai"
import { MdNoMealsOuline } from "react-icons/md"
import { RiHomeHeartFill } from "react-icons/ri"
import { FaBusAlt } from "react-icons/fa"
import { MdDeliveryDining } from "react-icons/md"
import { MdOutlineTravelExplore } from "react-icons/md"
import { MdCarRental } from "react-icons/md"
function Serive ()  {
    return (
        <>
        <Header/>
        <div className="service component__space" id="Services">
            <div className="heading">
                <h1 className="heading">Services</h1>
                
            </div>

            <div className="container">
                <div className="container1">


                    <div className="col__3">
                         <div className="service__box pointer">
                            <div className="icon">
                           <AiOutlineShoppingCart/>
                            </div>
                            <div className="service__meta">
                                <h1 className="service__text">Online Shop</h1>
                                <p className="p service__text p__color">
                                Optical fiber connections provided in
                                </p>
                                <p className="p service__text p__color">
                                not only in your cabins but rather to
                                </p>
                                <p className="p service__text p__color">
                                all of the BriSphere scenic working
                                
                                </p>
                            </div>
                         </div>
                    </div>
                    <div className="col__3">
                         <div className="service__box pointer">
                            <div className="icon">
                            <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path>
                  <line x1="2" y1="20" x2="2" y2="20"></line>
                </svg>
                            </div>
                            <div className="service__meta">
                                <h1 className="service__text">High Speed Internet</h1>
                                <p className="p service__text p__color">
                                Optical fiber connections provided in
                                </p>
                                <p className="p service__text p__color">
                                not only in your cabins but rather to
                                </p>
                                <p className="p service__text p__color">
                                all of the BriSphere scenic working
                                
                                </p>
                            </div>
                         </div>
                    </div>
                    <div className="col__3">
                         <div className="service__box pointer">
                            <div className="icon">
                            <MdNoMealsOuline/>
                            </div>
                            <div className="service__meta">
                                <h1 className="service__text">Healthy Meals</h1>
                                <p className="p service__text p__color">
                                Designed for working professionals
                                </p>
                                <p className="p service__text p__color">
                                with spacious interiors, comfortable
                                </p>
                                <p className="p service__text p__color">
                                your space.
                                </p>
                            </div>
                         </div>
                    </div>
                    

                    <div className="col__3">
                         <div className="service__box pointer">
                            <div className="icon">
                            <RiHomeHeartFill/>
                            </div>
                            <div className="service__meta">
                                <h1 className="service__text">Homely Stay</h1>
                                <p className="p service__text p__color">
                                    I throw myself down among the
                                </p>
                                <p className="p service__text p__color">
                                   tall grass by the stream as I lie
                                </p>
                                <p className="p service__text p__color">
                                    Close to the earth.
                                </p>
                            </div>
                         </div>
                    </div>

                    <div className="col__3">
                         <div className="service__box pointer">
                            <div className="icon">
                                <FaBusAlt/>
                            </div>
                            <div className="service__meta">
                                <h1 className="service__text">Transportation</h1>
                                <p className="p service__text p__color">
                                    I throw myself down among the
                                </p>
                                <p className="p service__text p__color">
                                   tall grass by the stream as I lie
                                </p>
                                <p className="p service__text p__color">
                                    Close to the earth.
                                </p>
                            </div>
                         </div>
                    </div>

                    <div className="col__3">
                         <div className="service__box pointer">
                            <div className="icon">
                            <MdDeliveryDining/>
                            </div>
                            <div className="service__meta">
                                <h1 className="service__text">Food Delivery</h1>
                                <p className="p service__text p__color">
                                    I throw myself down among the
                                </p>
                                <p className="p service__text p__color">
                                   tall grass by the stream as I lie
                                </p>
                                <p className="p service__text p__color">
                                    Close to the earth.
                                </p>
                            </div>
                         </div>
                    </div>

                    <div className="col__3">
                         <div className="service__box pointer">
                            <div className="icon">
                           <MdOutlineTravelExplore/>
                
                            </div>
                            <div className="service__meta">
                                <h1 className="service__text">Tourism</h1>
                                <p className="p service__text p__color">
                                    I throw myself down among the
                                </p>
                                <p className="p service__text p__color">
                                   tall grass by the stream as I lie
                                </p>
                                <p className="p service__text p__color">
                                    Close to the earth.
                                </p>
                            </div>
                         </div>
                    </div>

                    <div className="col__3">
                         <div className="service__box pointer">
                            <div className="icon">
                            <MdCarRental/>
                            </div>
                            <div className="service__meta">
                                <h1 className="service__text">Rental Service</h1>
                                <p className="p service__text p__color">
                                    I throw myself down among the
                                </p>
                                <p className="p service__text p__color">
                                   tall grass by the stream as I lie
                                </p>
                                <p className="p service__text p__color">
                                    Close to the earth.
                                </p>
                            </div>
                         </div>
                    </div>

                </div>
            </div>
        </div>
        </>
    )
}

export default Serive;
 