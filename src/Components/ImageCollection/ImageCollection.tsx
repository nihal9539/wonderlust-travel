import React from "react";
import "./ImageCollection.css";
import { GoArrowRight } from "react-icons/go";
import CountUp from "react-countup";
import { FiArrowUpRight } from "react-icons/fi";
import { useInView } from "react-intersection-observer";

const ImageCollection: React.FC = () => {
  interface DataItem {
    Title: string;
    price: string;
    desc: string;
    img: string;
  }
  const { ref: Ref, inView: View } = useInView({ triggerOnce: true });
  const data: DataItem[] = [
    {
      Title: "Surfing and Beach Vacation",
      price: "$ 400.00",
      desc: "Enjoy a relaxing getaway on the sunny shores of a beautiful beach.",
      img: "./suggection/beach.jpg",
    },
    {
      Title: "Great Wall of China Tour",
      price: "$ 600.00",
      desc: "Explore the ancient wonder of the Great Wall and its breathtaking views.",
      img: "./suggection/china-wall.jpg",
    },
    {
      Title: "Dubai Desert Safari with Dinner",
      price: "$ 500.00",
      desc: "Embark on an adventure across vast desert landscapes under clear skies.",
      img: "./suggection/desert.jpg",
    },
    {
      Title: "Forest Retreat and Mountain View",
      price: "$ 800.00",
      desc: "Immerse yourself in the tranquility of lush green forests and reconnect with nature.",
      img: "./suggection/forest.jpg",
    },
  ];

  return (
    // // <div>
    <div id="packages" style={{position:"relative"}}>
      <h1>
        What you can't do at your <br /> Home, can be Done here
      </h1>
      <div className="image-gallery">
        {data.map((item) => (
          <div className="gallery-panel-2">
            <div className="price">{item.price}</div>
            <img src={item.img} alt="" className="img" />
            <div className="gallery-panel-body">
              <h3>{item.Title}</h3>
              <p>{item.desc}</p>
              <button className="btn">
                Book Now{" "}
                <span>
                  <GoArrowRight size={25} />
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="package-footer">
        <div className="left-side">
          <p>
            dive into existing adventures as lorea opens <br /> doors to
            thirriling activities, whether it's hiking <br /> majestic tails or
            exploring vibrant markets.
          </p>
          <button>
            See all activites
            <FiArrowUpRight
              className="activity-button"
              size={25}
              strokeWidth={1}
            />
          </button>
        </div>
        <div className="right-side" ref={Ref}>
          <div>
            Traval Destination{" "}
            {View && (
              <span>
                {" "}
                <CountUp duration={3} end={3022} />+
              </span>
            )}
          </div>
          <div className="horizondal-line"></div>
          <div>
            Total Activities{" "}
            {View && (
              <span>
                {" "}
                <CountUp duration={3} end={2199} />+
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCollection;
