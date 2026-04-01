import React from "react";
import FeaturedTitle from "../../component/FeaturedTitle";
import FeaturedData from "../../component/FeaturedData";
import FeaturedDataList from "../../component/FeaturedDataList";

const Featured = () => {
  return (
    <section id="Featured" className="services section-bg Featured">
      <div className="container" data-aos="fade-up">
        {/* Title Component */}
        <FeaturedTitle />

        <div className="row">
          {/* Map through FeaturedData */}
          {FeaturedData.map((item) => (
            <FeaturedDataList key={item.id} ListData={item} />
          ))}
        </div>

        {/* "All Job Offers" button */}
        <div className="text-center mt-4">
          <button
            type="button"
            className="btn inline-flex items-center justify-center skil-btn All-Job-Offers"
          >
            All Job Offers
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="9.071"
              height="14.844"
              viewBox="0 0 9.071 14.844"
              className="ms-2"
            >
              <path
                d="M13.995,13.058,8.222,7.285,9.871,5.636l7.422,7.422L9.871,20.48,8.222,18.831Z"
                transform="translate(-8.222 -5.636)"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Featured;
