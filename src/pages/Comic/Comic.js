import Card from "components/Card/Card";
import Carousels from "components/Carousel/Carousel";
import Carousels1 from "components/Carousel1/Carousel1";
import Footer from "components/Footer/Footer";
import Iframe from "components/Iframe/Iframe";
import Navbar from "components/Navbar/Navbar";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
// import Card from "../../components/Card";
// import Carousels from "../../components/Carousel";
// import Carousels1 from "../../components/Carousel1";
// import Footer from "../../components/Footer";
// import Iframe from "../../components/Iframe";
// import Navbar from "../../components/Navbar";
import { getLinks } from "../../services/formService";

const Home = () => {
  const carouselRef1 = useRef(null);
  const carouselRef2 = useRef(null);

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    setLoading(true);
    getLinks({ setLoading, setData });
  }, []);

  const images = [
    "https://www.taschen.com/media/images/1640/marvel_comics_library_avengers_vol_1_1963_1965_xl_gb_book005_x_01162_2205271706_id_1393032.jpg",
    "https://i.ytimg.com/vi/MPG9seErNDg/maxresdefault.jpg",
    "https://i2.wp.com/www.comicsbeat.com/wp-content/uploads/2022/10/FfR2vKwX0AAO1Qa.jpg?fit=1200%2C700&ssl=1",
    "https://cdn.britannica.com/52/182852-050-24935D75/Flash-Wonder-Woman-Justice-League-Crisis-on.jpg",
    "https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/11/10-dc-comics-events-that-would-make-great-video-games-feature-image.jpg",
    "https://www.latercera.com/resizer/iQPp_ciyd-3bquL-15Z5rqoej9A=/900x600/filters:focal(463x308:473x298)/cloudfront-us-east-1.images.arcpublishing.com/copesa/SZU2GF7JMFEKPFFHECXUUC2DOU.jpg",
    "https://cdn.mos.cms.futurecdn.net/hc7A4cXpoijwriFsafK2Lf.jpg",
    "https://cdn.mos.cms.futurecdn.net/mZ5c5mwgD9Sg47ifxRRW8-1200-80.jpg",
    "https://www.newsnationnow.com/wp-content/uploads/sites/108/2021/10/AP090227027191.jpg?w=652",
    "https://variety.com/wp-content/uploads/2019/11/superman-green-lantern.jpg?w=681&h=383&crop=1",
  ];
  return (
    <>
      <Navbar />
      <Iframe />

      {/* Youtube Videos */}
       <h1 className="relative text-5xl ml-[4rem] pl-[1rem]  after:h-[100%] after:absolute after:left-0 after:w-[5px] after:rounded-[1px] after:z-[10]  after:bg-[#19919c] font-bold uppercase leading-[100%]  text-[#EEEEEE] my-[80px] tracking-wider">
         Videos
      </h1>

      {!loading &&
        data &&
        data.filter((data) => data.linkType == "youtube").length > 0 && (
          <Carousels refs={carouselRef1}>
            {data.map((item, index) => {
              if (item.linkType == "youtube") {
                return (
                  <iframe
                    key={index}
                    width="560"
                    height="315"
                    src={item.url}
                    title="YouTube video player"
                    frameBorder={0}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                    className="rounded-[30px] shadow-2xl"
                  ></iframe>
                );
              }
            })}
          </Carousels>
        )}

      {/* Comics Section */}
      <h1 className="relative text-5xl ml-[4rem] pl-[1rem]  after:h-[100%] after:absolute after:left-0 after:w-[5px] after:rounded-[1px] after:z-[10]  after:bg-[#19919c] font-bold uppercase leading-[100%]  text-[#EEEEEE] my-[80px] tracking-wider">
        Comics 
      </h1>

      {!loading &&
        data &&
        data.filter((data) => data.linkType == "comic").length > 0 && (
          <Carousels1 refs={carouselRef2}>
            {data
              .filter((data) => data.linkType === "comic")
              .map((item, index) => {
                if (item.linkType == "comic") {
                  return (
                    <a href={item.url} target="_blank">
                      <Card
                        title={item?.title || "Comic Videos"}
                        image={images[index]}
                      />
                    </a>
                  );
                }
              })}
          </Carousels1>
        )}
      <Footer />
    </>
  );
};

export default Home;
