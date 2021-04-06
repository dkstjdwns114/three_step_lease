import React, { useEffect, useState } from "react";
import PieChart from "../Chart/PieChart";

const TypeDetailTabs = (props) => {
  const [years, setYears] = useState("");
  const [animal_close_19, set_animal_close_19] = useState({});
  const [culture_close_19, set_culture_close_19] = useState({});
  const [environment_close_19, set_environment_close_19] = useState({});
  const [food_close_19, set_food_close_19] = useState({});
  const [health_close_19, set_health_close_19] = useState({});
  const [life_close_19, set_life_close_19] = useState({});
  const [other_close_19, set_other_close_19] = useState({});
  const [animal_close_20, set_animal_close_20] = useState({});
  const [culture_close_20, set_culture_close_20] = useState({});
  const [environment_close_20, set_environment_close_20] = useState({});
  const [food_close_20, set_food_close_20] = useState({});
  const [health_close_20, set_health_close_20] = useState({});
  const [life_close_20, set_life_close_20] = useState({});
  const [other_close_20, set_other_close_20] = useState({});
  const [animal_open_19, set_animal_open_19] = useState({});
  const [culture_open_19, set_culture_open_19] = useState({});
  const [environment_open_19, set_environment_open_19] = useState({});
  const [food_open_19, set_food_open_19] = useState({});
  const [health_open_19, set_health_open_19] = useState({});
  const [life_open_19, set_life_open_19] = useState({});
  const [other_open_19, set_other_open_19] = useState({});
  const [animal_open_20, set_animal_open_20] = useState({});
  const [culture_open_20, set_culture_open_20] = useState({});
  const [environment_open_20, set_environment_open_20] = useState({});
  const [food_open_20, set_food_open_20] = useState({});
  const [health_open_20, set_health_open_20] = useState({});
  const [life_open_20, set_life_open_20] = useState({});
  const [other_open_20, set_other_open_20] = useState({});

  useEffect(() => {
    setYears(props.yearsValue);
    if (props.yearsValue === "type_detail_close_19") {
      type_detail_close_19_handler();
    } else if (props.yearsValue === "type_detail_close_20") {
      type_detail_close_20_handler();
    } else if (props.yearsValue === "type_detail_open_19") {
      type_detail_open_19_handler();
    } else if (props.yearsValue === "type_detail_open_20") {
      type_detail_open_20_handler();
    }
  }, [props.yearsValue]);

  const type_detail_close_19_handler = () => {
    props.type_detail_close_19.forEach((data) => {
      if (data["category"] === "animal") {
        set_animal_close_19(data);
      } else if (data["category"] === "culture") {
        set_culture_close_19(data);
      } else if (data["category"] === "environment") {
        set_environment_close_19(data);
      } else if (data["category"] === "food") {
        set_food_close_19(data);
      } else if (data["category"] === "health") {
        set_health_close_19(data);
      } else if (data["category"] === "life") {
        set_life_close_19(data);
      } else if (data["category"] === "other") {
        set_other_close_19(data);
      }
    });
  };

  const type_detail_close_20_handler = () => {
    props.type_detail_close_20.forEach((data) => {
      if (data["category"] === "animal") {
        set_animal_close_20(data);
      } else if (data["category"] === "culture") {
        set_culture_close_20(data);
      } else if (data["category"] === "environment") {
        set_environment_close_20(data);
      } else if (data["category"] === "food") {
        set_food_close_20(data);
      } else if (data["category"] === "health") {
        set_health_close_20(data);
      } else if (data["category"] === "life") {
        set_life_close_20(data);
      } else if (data["category"] === "other") {
        set_other_close_20(data);
      }
    });
  };

  const type_detail_open_19_handler = () => {
    props.type_detail_open_19.forEach((data) => {
      if (data["category"] === "animal") {
        set_animal_open_19(data);
      } else if (data["category"] === "culture") {
        set_culture_open_19(data);
      } else if (data["category"] === "environment") {
        set_environment_open_19(data);
      } else if (data["category"] === "food") {
        set_food_open_19(data);
      } else if (data["category"] === "health") {
        set_health_open_19(data);
      } else if (data["category"] === "life") {
        set_life_open_19(data);
      } else if (data["category"] === "other") {
        set_other_open_19(data);
      }
    });
  };

  const type_detail_open_20_handler = () => {
    props.type_detail_open_20.forEach((data) => {
      if (data["category"] === "animal") {
        set_animal_open_20(data);
      } else if (data["category"] === "culture") {
        set_culture_open_20(data);
      } else if (data["category"] === "environment") {
        set_environment_open_20(data);
      } else if (data["category"] === "food") {
        set_food_open_20(data);
      } else if (data["category"] === "health") {
        set_health_open_20(data);
      } else if (data["category"] === "life") {
        set_life_open_20(data);
      } else if (data["category"] === "other") {
        set_other_open_20(data);
      }
    });
  };

  return (
    <>
      <div className="example-wrap">
        <div className="nav-tabs-horizontal" data-plugin="tabs">
          <ul className="nav nav-tabs" role="tablist">
            <li className="nav-item" role="presentation">
              <a
                className="nav-link active"
                data-toggle="tab"
                href="#exampleTabsOne"
                aria-controls="exampleTabsOne"
                role="tab"
              >
                동물
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link"
                data-toggle="tab"
                href="#exampleTabsTwo"
                aria-controls="exampleTabsTwo"
                role="tab"
              >
                문화
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link"
                data-toggle="tab"
                href="#exampleTabsThree"
                aria-controls="exampleTabsThree"
                role="tab"
              >
                자연환경
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link"
                data-toggle="tab"
                href="#exampleTabsFour"
                aria-controls="exampleTabsFour"
                role="tab"
              >
                식품
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link"
                data-toggle="tab"
                href="#exampleTabsFive"
                aria-controls="exampleTabsFive"
                role="tab"
              >
                건강
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link"
                data-toggle="tab"
                href="#exampleTabsSix"
                aria-controls="exampleTabsSix"
                role="tab"
              >
                생활
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link"
                data-toggle="tab"
                href="#exampleTabsSeven"
                aria-controls="exampleTabsSeven"
                role="tab"
              >
                기타
              </a>
            </li>
          </ul>
          <div className="tab-content pt-20">
            <div
              className="tab-pane active"
              id="exampleTabsOne"
              role="tabpanel"
            >
              <PieChart
                yearsValue={years}
                close_19={animal_close_19}
                close_20={animal_close_20}
                open_19={animal_open_19}
                open_20={animal_open_20}
                numberWithCommas={props.numberWithCommas}
              />
            </div>
            <div className="tab-pane" id="exampleTabsTwo" role="tabpanel">
              <PieChart
                yearsValue={years}
                close_19={culture_close_19}
                close_20={culture_close_20}
                open_19={culture_open_19}
                open_20={culture_open_20}
                numberWithCommas={props.numberWithCommas}
              />
            </div>
            <div className="tab-pane" id="exampleTabsThree" role="tabpanel">
              <PieChart
                yearsValue={years}
                close_19={environment_close_19}
                close_20={environment_close_20}
                open_19={environment_open_19}
                open_20={environment_open_20}
                numberWithCommas={props.numberWithCommas}
              />
            </div>
            <div className="tab-pane" id="exampleTabsFour" role="tabpanel">
              <PieChart
                yearsValue={years}
                close_19={food_close_19}
                close_20={food_close_20}
                open_19={food_open_19}
                open_20={food_open_20}
                numberWithCommas={props.numberWithCommas}
              />
            </div>
            <div className="tab-pane" id="exampleTabsFive" role="tabpanel">
              <PieChart
                yearsValue={years}
                close_19={health_close_19}
                close_20={health_close_20}
                open_19={health_open_19}
                open_20={health_open_20}
                numberWithCommas={props.numberWithCommas}
              />
            </div>
            <div className="tab-pane" id="exampleTabsSix" role="tabpanel">
              <PieChart
                yearsValue={years}
                close_19={life_close_19}
                close_20={life_close_20}
                open_19={life_open_19}
                open_20={life_open_20}
                numberWithCommas={props.numberWithCommas}
              />
            </div>
            <div className="tab-pane" id="exampleTabsSeven" role="tabpanel">
              <PieChart
                yearsValue={years}
                close_19={other_close_19}
                close_20={other_close_20}
                open_19={other_open_19}
                open_20={other_open_20}
                numberWithCommas={props.numberWithCommas}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default TypeDetailTabs;
