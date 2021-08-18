import React from 'react';
import Slider from "react-slick";


function Carousel() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };

  return (
    <div className="container">
      <Slider className="slider" {...settings}>
        <div className="slider-wrap">
          <img src="https://thumbs.dfs.ivi.ru/storage39/contents/5/0/cd00a84d5a7315f156145944709c54.jpg/1216x370/" alt=""/>
        </div>
        <div className="slider-wrap">
          <img src="https://thumbs.dfs.ivi.ru/storage26/contents/5/6/204a0aa7530ae023e8157afe586482.jpg/1216x370/" alt=""/>
        </div>
        <div className="slider-wrap">
          <img src="https://thumbs.dfs.ivi.ru/storage6/contents/9/5/8f1143eca263bba26c6a1d22caa76b.jpg/1216x370/" alt=""/>
        </div>
        <div className="slider-wrap">
          <img src="https://thumbs.dfs.ivi.ru/storage37/contents/0/a/7eab610bc2d24880c43ad89f135806.jpg/1216x370/" alt=""/>
        </div>
        <div className="slider-wrap">
          <img src="https://thumbs.dfs.ivi.ru/storage9/contents/3/e/b8e5c456d39ec08cd3e5f241c89267.jpg/1216x370/" alt=""/>
        </div>
      </Slider>
    </div>
  );
  
};

export default Carousel;