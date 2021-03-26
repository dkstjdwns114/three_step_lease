import React, { useEffect, useState } from "react";
import TypeDetailYearsBtn from "../Button/TypeDetailYearsBtn";
import StandardTabs from "../Tab/StandardTabs";

const TypeDetailView = (props) => {
  return (
    <>
      <div className="col-xxl-6 col-lg-6 col-md-12">
        <div className="card">
          <div className="card-block p-0 p-30 h-full">
            <div className="counter text-left">
              <span className="counter-number">3650</span>
              <div className="counter-label text-uppercase mb-20">
                views of your project
              </div>
              <div className="counter-label text-uppercase mb-20">
                <StandardTabs />
              </div>
              <TypeDetailYearsBtn />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TypeDetailView;
