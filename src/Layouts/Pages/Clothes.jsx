import React from 'react'
import womenClothes from "../../assets/image/women-clothes-img.png"
import tshirt from "../../assets/image/tshirt-img.png"
import dress from "../../assets/image/dress-shirt-img.png"

const Hero = (props) => {
    return (
        <>
            <div className="fashion_section mt-5">
                <div id="main_slider" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="container">
                                <h1 className="fashion_taital">{props.name}</h1>
                                <div className="fashion_section_2">
                                    <div className="row">
                                        <div className="col-lg-4 col-sm-4">
                                            <div className="box_main">
                                                <h4 className="shirt_text">Man T -shirt</h4>
                                                <p className="price_text">Price  <span style={{ color: "#262626" }}>$ 30</span></p>
                                                <div className="tshirt_img"><img src={tshirt} /></div>
                                                <div className="btn_main">
                                                    <div className="buy_bt"><a href="#">Buy Now</a></div>
                                                    <div className="seemore_bt"><a href="#">See More</a></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-4">
                                            <div className="box_main">
                                                <h4 className="shirt_text">Man -shirt</h4>
                                                <p className="price_text">Price  <span style={{ color: "#262626" }}>$ 30</span></p>
                                                <div className="tshirt_img"><img src={dress} /></div>
                                                <div className="btn_main">
                                                    <div className="buy_bt"><a href="#">Buy Now</a></div>
                                                    <div className="seemore_bt"><a href="#">See More</a></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-4">
                                            <div className="box_main">
                                                <h4 className="shirt_text">Woman Scart</h4>
                                                <p className="price_text">Price  <span style={{ color: "#262626" }}>$ 30</span></p>
                                                <div className="tshirt_img"><img src={womenClothes} /></div>
                                                <div className="btn_main">
                                                    <div className="buy_bt"><a href="#">Buy Now</a></div>
                                                    <div className="seemore_bt"><a href="#">See More</a></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="container">
                                <h1 className="fashion_taital">{props.name}</h1>
                                <div className="fashion_section_2">
                                    <div className="row">
                                        <div className="col-lg-4 col-sm-4">
                                            <div className="box_main">
                                                <h4 className="shirt_text">Man T -shirt</h4>
                                                <p className="price_text">Price  <span style={{ color: "#262626" }}>$ 30</span></p>
                                                <div className="tshirt_img"><img src={tshirt} /></div>
                                                <div className="btn_main">
                                                    <div className="buy_bt"><a href="#">Buy Now</a></div>
                                                    <div className="seemore_bt"><a href="#">See More</a></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-4">
                                            <div className="box_main">
                                                <h4 className="shirt_text">Man -shirt</h4>
                                                <p className="price_text">Price  <span style={{ color: "#262626" }}>$ 30</span></p>
                                                <div className="tshirt_img"><img src={dress} /></div>
                                                <div className="btn_main">
                                                    <div className="buy_bt"><a href="#">Buy Now</a></div>
                                                    <div className="seemore_bt"><a href="#">See More</a></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-4">
                                            <div className="box_main">
                                                <h4 className="shirt_text">Woman Scart</h4>
                                                <p className="price_text">Price  <span style={{ color: "#262626" }}>$ 30</span></p>
                                                <div className="tshirt_img"><img src={womenClothes} /></div>
                                                <div className="btn_main">
                                                    <div className="buy_bt"><a href="#">Buy Now</a></div>
                                                    <div className="seemore_bt"><a href="#">See More</a></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="container">
                                <h1 className="fashion_taital">{props.name}</h1>
                                <div className="fashion_section_2">
                                    <div className="row">
                                        <div className="col-lg-4 col-sm-4">
                                            <div className="box_main">
                                                <h4 className="shirt_text">Man T -shirt</h4>
                                                <p className="price_text">Price  <span style={{ color: "#262626" }}>$ 30</span></p>
                                                <div className="tshirt_img"><img src={tshirt} /></div>
                                                <div className="btn_main">
                                                    <div className="buy_bt"><a href="#">Buy Now</a></div>
                                                    <div className="seemore_bt"><a href="#">See More</a></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-4">
                                            <div className="box_main">
                                                <h4 className="shirt_text">Man -shirt</h4>
                                                <p className="price_text">Price  <span style={{ color: "#262626" }}>$ 30</span></p>
                                                <div className="tshirt_img"><img src={dress} /></div>
                                                <div className="btn_main">
                                                    <div className="buy_bt"><a href="#">Buy Now</a></div>
                                                    <div className="seemore_bt"><a href="#">See More</a></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-4">
                                            <div className="box_main">
                                                <h4 className="shirt_text">Woman Scart</h4>
                                                <p className="price_text">Price  <span style={{ color: "#262626" }}>$ 30</span></p>
                                                <div className="tshirt_img"><img src={womenClothes} /></div>
                                                <div className="btn_main">
                                                    <div className="buy_bt"><a href="#">Buy Now</a></div>
                                                    <div className="seemore_bt"><a href="#">See More</a></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#main_slider" role="button" data-slide="prev">
                        <i className='bx bx-chevron-left' ></i>
                    </a>
                    <a className="carousel-control-next" href="#main_slider" role="button" data-slide="next">
                        <i className='bx bx-chevron-right'></i>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Hero