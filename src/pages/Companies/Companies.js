import React from "react";
import CompaniesTItle from "../../component/CompaniesTItle";
import CompaniesData from "../../component/CompaniesData";
import CompaniesList from "../../component/CompaniesList";

const Companies = () => {
  return (
    <>
      <section
        id="CompaniesList-box"
        className="services section-bg CompaniesList-box"
      >
        <div className="container" data-aos="fade-up">
          <CompaniesTItle />

          <div className="row">
            {CompaniesData.map((list) => (
              <CompaniesList key={list.id} ListData={list} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Companies;
