import React from "react";
import { Link } from "react-router-dom";

const FeaturedDataList = ({ ListData }) => {
  if (!ListData) return null;

  const {
    title,
    serviceImg,
    review,
    company,
    experience,
    location,
    time,
  } = ListData;

  return (
    <div className="feature-list col-xl-3 col-md-6 d-flex align-items-stretch flex-wrap">
      <div className="feature-item">
        <div className="feature-inn-item">

          {/* HEADER */}
          <div className="feature-header">
            <div className="feature-left-header">
              <div className="feature-img">
                <img src={serviceImg} alt={title} />
              </div>
              <h6 className="job-type">{title}</h6>
            </div>

            <button type="button">
              <Link to="">
                <i className="bi bi-bookmark"></i>
              </Link>
            </button>
          </div>

          {/* COMPANY + REVIEW */}
          <div className="review-boxx">
            <p>{company}</p>
            <span>
              <i className="bi bi-star-fill"></i> {review}
            </span>
          </div>

          {/* DETAILS */}
          <div className="ex-box">
            <p>{experience}</p>
            <p>{location}</p>
            <p>{time}</p>
          </div>

          {/* BUTTON */}
          <button className="btn skil-btn">
            Apply Now
          </button>

        </div>
      </div>
    </div>
  );
};

export default FeaturedDataList;
