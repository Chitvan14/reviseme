"use client";

import React from "react";
// eslint-disable-next-line
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

export default function Carousel(props) {
  const { perPage, autoplay, interval, image, perPage640 } = props;
  const showHideClass = "";
  function loadVideo(url, id) {
    var x = document.getElementById(id);
    var y = document.getElementById("img" + id);

    if (x.style.display === "none") {
      x.style.display = "flex";
      y.style.display = "none";
    } else {
      x.style.display = "none";
      y.style.display = "flex";
    }
  }
  return (
    <Splide
      hasTrack={true}
      options={{
        type: "slide",
        perPage: perPage,
        perMove: 1,
        focus: "center",
        gap: "1rem",
        autoplay,
        interval,
        rewind: true,
        arrows: false,
        pagination: false,
        lazyLoad: "nearby",
        breakpoints: {
          640: {
            perPage: perPage640 || 1,
          },
        },
      }}
    >
      {image != undefined &&
        image?.map((img, index) => (
          <SplideSlide key={index}>
            {img.imgURL.includes("mp4") ? (
              <>
                <img
                  onClick={() => loadVideo(img.imgURL, img.imgAlt + index)}
                  id={"img" + img.imgAlt + index}
                  src={img.description}
                  alt={img.imgAlt}
                  className={`${props.classes} w-auto object-cover object-center rounded`}
                />
                <div id={img.imgAlt + index} style={{ display: "none" }}>
                  <iframe
                    className="m-0"
                    src={img.imgURL}
                    allowFullScreen
                    width={"100%"}
                    height={300}
                    style={{ margin: 0 }}
                  />
                </div>
              </>
            ) : (
<>
              
              <img
                src={img.mobileImgURL}
                alt={img.imgAlt}
                className={`${props.classes} w-auto object-cover object-center rounded block lg:hidden`}
              />
              <img
                src={img.imgURL}
                alt={img.imgAlt}
                className={`${props.classes} w-auto object-cover object-center rounded hidden lg:block`}
              /></>
            )}
          </SplideSlide>
        ))}
    </Splide>
  );
}
