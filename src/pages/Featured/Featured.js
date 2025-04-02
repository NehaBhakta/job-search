import React from "react";
import FeaturedTitle from "../../component/FeaturedTitle";
import FeaturedData from "../../component/FeaturedData";
import FeaturedDataList from "../../component/FeaturedDataList";

const Featured = () => {
  return (
    <>
      <section id="Featured" className="services section-bg Featured">
        <div className="container" data-aos="fade-up">
          <FeaturedTitle />

          <div className="row">
            {FeaturedData.map((list) => (
              <FeaturedDataList key={list.id} ListData={list} />
            ))}
            <button
              type="button"
              class="btn inline-flex items-center justify-center skil-btn All-Job-Offers"
              fdprocessedid="27yvs"
            >
              All Job Offers
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="9.071"
                height="14.844"
                viewBox="0 0 9.071 14.844"
              >
                <path
                  id="Path_20177"
                  data-name="Path 20177"
                  d="M13.995,13.058,8.222,7.285,9.871,5.636l7.422,7.422L9.871,20.48,8.222,18.831Z"
                  transform="translate(-8.222 -5.636)"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Featured;
