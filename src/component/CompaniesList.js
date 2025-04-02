import React from "react";
import { Link } from "react-router-dom";
import Image from "./Image";

const CompaniesList = (props) => {
  const { ListData } = props;
  const { Titel, serLink, serviceImg, Review } = ListData;
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
              <span>
                <i class="bi bi-star-fill"></i>
                {Review}
              </span>
            </div>
            <div className="star">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="Group_15038"
                data-name="Group 15038"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  id="Path_20175"
                  data-name="Path 20175"
                  d="M0,0H24V24H0Z"
                  fill="none"
                />
                <path
                  id="Path_20176"
                  data-name="Path 20176"
                  d="M13.995,13.058,8.222,7.285,9.871,5.636l7.422,7.422L9.871,20.48,8.222,18.831Z"
                  transform="translate(-1.221 -0.636)"
                  fill="#999"
                />
              </svg>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};
export default CompaniesList;
