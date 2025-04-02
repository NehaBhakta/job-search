import React from "react";
import CompanyLogotitle from "../../component/CompanyLogotitle";
import Logodata from "../../component/Logodata";
import LogoList from "../../component/LogoList";

const CompanyLogo = () => {
  return (
    <>
      <section className="section-bg Companieslogo-box">
        <div className="container" data-aos="fade-up">
          <CompanyLogotitle />
          <div className="row">
            {Logodata.map((list) => (
              <LogoList key={list.id} ListData={list} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CompanyLogo;
