import React, { useEffect, useState } from "react";
import FixedHeaderTable from "../Table/FixedHeaderTable";

const TabsAccording = (props) => {
  return (
    <>
      <div className="col-xxl-12 col-lg-12 col-md-12">
        {/* <!-- Example Continuous Accordion --> */}
        <div class="card">
          <div class="card-block p-0 p-30 h-full">
            <div class="counter text-left">
              <h4 class="example-title">Continuous Accordion</h4>
              <div
                class="panel-group panel-group-continuous"
                id="exampleAccordionContinuous"
                aria-multiselectable="true"
                role="tablist"
              >
                <div className="panel mb-3">
                  <div
                    className="panel-heading"
                    id="exampleHeadingContinuousOne"
                    role="tab"
                  >
                    <a
                      className="panel-title"
                      data-parent="#exampleAccordionContinuous"
                      data-toggle="collapse"
                      href="#exampleCollapseContinuousOne"
                      aria-controls="exampleCollapseContinuousOne"
                      aria-expanded="true"
                    >
                      Collapsible Group Item #1
                    </a>
                  </div>
                  <div
                    className="panel-collapse collapse show"
                    id="exampleCollapseContinuousOne"
                    aria-labelledby="exampleHeadingContinuousOne"
                    role="tabpanel"
                  >
                    <div className="panel-body">
                      <FixedHeaderTable />
                    </div>
                  </div>
                </div>
                <div className="panel mb-3">
                  <div
                    className="panel-heading"
                    id="exampleHeadingContinuousTwo"
                    role="tab"
                  >
                    <a
                      className="panel-title collapsed"
                      data-parent="#exampleAccordionContinuous"
                      data-toggle="collapse"
                      href="#exampleCollapseContinuousTwo"
                      aria-controls="exampleCollapseContinuousTwo"
                      aria-expanded="false"
                    >
                      Collapsible Group Item #2
                    </a>
                  </div>
                  <div
                    className="panel-collapse collapse"
                    id="exampleCollapseContinuousTwo"
                    aria-labelledby="exampleHeadingContinuousTwo"
                    role="tabpanel"
                  >
                    <div className="panel-body">
                      <FixedHeaderTable />
                    </div>
                  </div>
                </div>
                <div className="panel mb-3">
                  <div
                    className="panel-heading"
                    id="exampleHeadingContinuousThree"
                    role="tab"
                  >
                    <a
                      className="panel-title collapsed"
                      data-parent="#exampleAccordionContinuous"
                      data-toggle="collapse"
                      href="#exampleCollapseContinuousThree"
                      aria-controls="exampleCollapseContinuousThree"
                      aria-expanded="false"
                    >
                      Collapsible Group Item #3
                    </a>
                  </div>
                  <div
                    className="panel-collapse collapse"
                    id="exampleCollapseContinuousThree"
                    aria-labelledby="exampleHeadingContinuousThree"
                    role="tabpanel"
                  >
                    <div className="panel-body">
                      <FixedHeaderTable />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Example Continuous Accordion --> */}
      </div>
    </>
  );
};

export default TabsAccording;
