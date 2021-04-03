import React from "react";
import HorizontalBarChart from "../Chart/HorizontalBarChart";
import RadarChart from "../Chart/RadarChart";

const CategorylTabs = (props) => {
  return (
    <>
      <div className="example-wrap">
        <div className="nav-tabs-horizontal" data-plugin="tabs">
          <ul className="nav nav-tabs" role="tablist">
            <li className="nav-item" role="presentation">
              <a
                className="nav-link active"
                data-toggle="tab"
                href="#categoryTabsOne"
                aria-controls="categoryTabsOne"
                role="tab"
              >
                막대그래프
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link"
                data-toggle="tab"
                href="#categoryTabsTwo"
                aria-controls="categoryTabsTwo"
                role="tab"
              >
                레이더 그래프
              </a>
            </li>
          </ul>
          <div className="tab-content pt-20">
            <div
              className="tab-pane active"
              id="categoryTabsOne"
              role="tabpanel"
            >
              <HorizontalBarChart
                type_close_19={props.type_close_19}
                type_open_19={props.type_open_19}
                type_close_20={props.type_close_20}
                type_open_20={props.type_open_20}
                city_name={props.city_name}
                yearsValue={props.yearsValue}
                numberWithCommas={props.numberWithCommas}
              />
            </div>
            <div className="tab-pane" id="categoryTabsTwo" role="tabpanel">
              <RadarChart
                type_close_19={props.type_close_19}
                type_open_19={props.type_open_19}
                type_close_20={props.type_close_20}
                type_open_20={props.type_open_20}
                city_name={props.city_name}
                numberWithCommas={props.numberWithCommas}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CategorylTabs;
