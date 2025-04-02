import React from "react";
import Service from "../../component/Service";
import ServiceDatalist from "../../component/ServiceData";
import List from "../../component/List";

const About = () => {
  return (
    <>
      <section id="services" className="services section-bg">
        <div className="container" data-aos="fade-up">
          <Service />

          <div className="row">
            {ServiceDatalist.map((list) => (
              <List key={list.id} ListData={list} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
