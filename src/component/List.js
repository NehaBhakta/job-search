import React from "react";
import { Link } from "react-router-dom";
import Image from "./Image";
import "bootstrap/dist/css/bootstrap.min.css";

const List = (props) => {
  const { ListData } = props;
  const { Titel, serLink, serviceImg, Openings } = ListData;
  return (
    <>
      <div
        className="category-item col-xl-3 col-md-6 d-flex align-items-stretch flex-wrap"
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        <Link to={serLink} className="img-box">
          <div className="category-box flex align-items-stretch flex-wrap">
            <div className="category-left-img-box">
              <Image
                heroImage={serviceImg}
                className={`img-fluid animated`}
                alt={Titel}
                id={`bannerHeaderImag`}
              />
            </div>
            <div className="category-right-box">
              <h5>{Titel}</h5>
              <span>{Openings}</span>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};
export default List;
