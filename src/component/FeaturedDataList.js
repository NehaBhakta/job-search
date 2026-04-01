import React from "react";
import { Link } from "react-router-dom";

const FeaturedDataList = ({ ListData }) => {
  if (!ListData) return null;

  const {
    Titel,
    serviceImg,
    review,
    h1,
    titleone,
    titletwo,
    time,
    listone,
    listtwo,
    listthree,
    listfour,
    listfive,
    listsix,
    skilone,
    skiltwo,
    skilthree,
    skilfour,
    skilfive,
  } = ListData;

  return (
    <div className="feature-list col-xl-3 col-md-6 d-flex align-items-stretch flex-wrap">
      <div className="feature-item">
        <div className="feature-inn-item">

          {/* HEADER */}
          <div className="feature-header">
            <div className="feature-left-header">
              <div className="feature-img">
                <img src={serviceImg} alt={Titel} />
              </div>
              <h6 className="job-type">{Titel}</h6>
            </div>
            <button type="button">
              <Link to="">
                <i className="bi bi-bookmark"></i>
              </Link>
            </button>
          </div>

          {/* COMPANY + REVIEW */}
          <div className="review-boxx">
            <p>{h1}</p>
            <span>
              <i className="bi bi-star-fill"></i> {review}
            </span>
          </div>

          {/* DETAILS */}
          <div className="common-scrollbar">
            <div className="ex-box">
              <div className="ex-wrap">
                <div className="ex-item">
                  <div className="w-5">
                    <i className="bi bi-bag-x"></i>
                  </div>
                  <p title="Experience" className="max-w-[64px] w-full truncate">
                    {titleone}
                  </p>
                </div>
                <div className="ex-item">
                  <div>
                    <i className="bi bi-geo-alt"></i>
                  </div>
                  <p title="Location" className="max-w-[64px] w-full truncate">
                    {titletwo}
                  </p>
                </div>
              </div>
              <p>{time}</p>
            </div>

            {/* Lists */}
            <ul className="f-list">
              {listone && <li>{listone}</li>}
              {listtwo && <li>{listtwo}</li>}
              {listthree && <li>{listthree}</li>}
            </ul>
          </div>

          <div className="in-box">
            <div className="in-wrap overflow-auto common-scrollbar">
              <ul className="f-list">
                {listfour && <li>{listfour}</li>}
                {listfive && <li>{listfive}</li>}
                {listsix && <li>{listsix}</li>}
              </ul>
            </div>

            {/* Skills */}
            <div>
              <ul className="f-list skil-box">
                {skilone && <li>{skilone}</li>}
                {skiltwo && <li>{skiltwo}</li>}
                {skilthree && <li>{skilthree}</li>}
                {skilfour && <li>{skilfour}</li>}
                {skilfive && <li>{skilfive}</li>}
              </ul>

              {/* APPLY BUTTON */}
              <button type="button" className="btn inline-flex items-center justify-center skil-btn">
                Apply Now
                <svg xmlns="http://www.w3.org/2000/svg" width="9.071" height="14.844" viewBox="0 0 9.071 14.844">
                  <path
                    d="M13.995,13.058,8.222,7.285,9.871,5.636l7.422,7.422L9.871,20.48,8.222,18.831Z"
                    transform="translate(-8.222 -5.636)"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          <div className="white-bg-feature"></div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedDataList;
