import React from "react";
import { Link } from "react-router-dom";
import Image from "./Image";

const LogoList = (props) => {
  const { ListData } = props;
  const { serLink, Titel, Companieslog } = ListData;
  return (
    <>
      <div className="category-item" data-aos="zoom-in" data-aos-delay="100">
        <Link to={serLink} className="img-box">
          <div className="category-box flex align-items-stretch flex-wrap">
            <div className="category-left-img-box">
              <Image
                heroImage={Companieslog}
                className={`img-fluid animated`}
                alt={Titel}
                id={`bannerHeaderImag`}
              />
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};
export default LogoList;
