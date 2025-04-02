import React from "react";
import { Link } from "react-router-dom";

const FeaturedDataList = (props) => {
  const { ListData } = props;
  const {
    Titel,
    serLink,
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
    <>
      <div className="feature-list col-xl-3 col-md-6 d-flex align-items-stretch flex-wrap ">
        <div className="feature-item">
          <div className="feature-inn-item">
            <div className="feature-header">
              <div className="feature-left-header">
                <div className="feature-img">
                  <img alt="" src={serviceImg} />
                </div>
                <h6 title="Front End Developer (VueJs)" className="job-type">
                  {Titel}
                </h6>
              </div>
              <div>
                <button type="button">
                  <div className="feature-btn">
                    <div>
                      <Link to="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          className="text-gray ml-auto"
                        >
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                            d="M5 2h14a1 1 0 0 1 1 1v19.143a.5.5 0 0 1-.766.424L12 18.03l-7.234 4.536A.5.5 0 0 1 4 22.143V3a1 1 0 0 1 1-1zm13 2H6v15.432l6-3.761 6 3.761V4z"
                            transform="translate(0)"
                          ></path>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </button>
              </div>
            </div>
            <div className="review-boxx">
              <p title={Titel} className="">
                {h1}
              </p>
              <span>
                <i class="bi bi-star-fill"></i>
                {review}
              </span>
            </div>
            <div className="common-scrollbar">
              <div className="ex-box">
                <div className="ex-wrap">
                  <div className="ex-item">
                    <div className="w-5">
                      <i class="bi bi-bag-x"></i>
                    </div>
                    <p
                      title="2+ years"
                      className="max-w-[64px] w-full truncate"
                    >
                      {titleone}
                    </p>
                  </div>
                  <div className="ex-item">
                    <div>
                      <i class="bi bi-geo-alt"></i>
                    </div>
                    <p
                      title="West Jakarta, Indonesia"
                      className="max-w-[64px] w-full truncate"
                    >
                      {titletwo}
                    </p>
                  </div>
                </div>
                <p className="">{time}</p>
              </div>
              <ul className="f-list">
                <li>{listone}</li>
                <li>{listtwo}</li>
                <li>{listthree}</li>
              </ul>
            </div>
            <div className="in-box">
              <div className="in-wrap overflow-auto common-scrollbar">
                <ul className="f-list">
                  {/* <li>{listone}</li>
              <li>{listtwo}</li> */}

                  <li>{listfour}</li>
                  <li>{listfive}</li>
                  <li>{listsix}</li>
                </ul>
              </div>
              <div>
                <div className="absolute">
                  <ul className="f-list  skil-box">
                    <li>{skilone}</li>
                    <li>{skiltwo}</li>
                    <li>{skilthree}</li>
                    <li>{skilfour}</li>
                    <li>{skilfive}</li>
                  </ul>
                  {/* <div className="flex flex-wrap items-center gap-2 border-t border-b border-gray py-3 w-full h-[66px] overflow-auto common-scrollbar">
                  <div className="h-1 w-1 rounded-full bg-mute"></div>
                  <p className=" text-mute font-medium text-xs">{skilone}</p>
                  <div className="h-1 w-1 rounded-full bg-mute"></div>
                  <p className=" text-mute font-medium text-xs">{skiltwo}</p>
                  <div className="h-1 w-1 rounded-full bg-mute"></div>
                  <p className=" text-mute font-medium text-xs">{skilthree}</p>
                  <div className="h-1 w-1 rounded-full bg-mute"></div>
                  <p className=" text-mute font-medium text-xs">{skilfour}</p>
                  <div className="h-1 w-1 rounded-full bg-mute"></div>
                  <p className=" text-mute font-medium text-xs">{skilfive}</p>
                </div> */}
                </div>
                <button
                  type="button"
                  className="btn inline-flex items-center justify-center skil-btn"
                >
                  Apply Now
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
            <div className="white-bg-feature"></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default FeaturedDataList;
