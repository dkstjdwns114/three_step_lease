import React, { useEffect } from "react";
import Chartist from "chartist";
import ChartistTooltip from "chartist-plugin-tooltips-updated";
import SmartTable from "../Table/SmartTable";

const ChartistTest = (props) => {
  useEffect(() => {
    animationChart(".ct-chart1");
    animationChart(".ct-chart2");
  }, []);

  const animationChart = (chartClassName) => {
    let labelArray = [];
    chartClassName === ".ct-chart1" &&
      (labelArray = ["Jan", "2", "3", "4", "5", "6"]);
    chartClassName === ".ct-chart2" &&
      (labelArray = ["7", "8", "9", "10", "11", "12"]);

    let chart = new Chartist.Line(
      chartClassName,
      {
        labels: labelArray,
        series: [
          [
            { meta: "2019 Open", value: 1 },
            { meta: "2019 Open", value: 9 },
            { meta: "2019 Open", value: 8 },
            { meta: "2019 Open", value: 3 },
            { meta: "2019 Open", value: 8 },
            { meta: "2019 Open", value: 7 }
          ],
          [
            { meta: "Jan", value: 1 },
            { meta: "Feb", value: 5 },
            { meta: "Mar", value: 8 },
            { meta: "Apr", value: 3 },
            { meta: "May", value: 12 },
            { meta: "Jun", value: 17 }
          ],
          [
            { meta: "Jan", value: 7 },
            { meta: "Feb", value: 9 },
            { meta: "Mar", value: 4 },
            { meta: "Apr", value: 5 },
            { meta: "May", value: 12 },
            { meta: "Jun", value: 6 }
          ],
          [
            { meta: "Jan", value: 1 },
            { meta: "Feb", value: 12 },
            { meta: "Mar", value: 8 },
            { meta: "Apr", value: 5 },
            { meta: "May", value: 12 },
            { meta: "Jun", value: 20 }
          ]
        ]
      },
      {
        low: 0,
        high: 20,
        // fullWidth: true,
        plugins: [ChartistTooltip()]
      }
    );

    let seq = 0;
    let delays = 100;
    let durations = 500;

    chart.on("created", function () {
      seq = 0;
    });

    chart.on("draw", function (data) {
      seq++;

      if (data.type === "line") {
        data.element.animate({
          opacity: {
            begin: seq * delays + 2000,
            dur: durations,
            from: 0,
            to: 1
          }
        });
      } else if (data.type === "label" && data.axis === "x") {
        data.element.animate({
          y: {
            begin: seq * delays,
            dur: durations,
            from: data.y + 100,
            to: data.y,
            easing: "easeOutQuart"
          }
        });
      } else if (data.type === "label" && data.axis === "y") {
        data.element.animate({
          x: {
            begin: seq * delays,
            dur: durations,
            from: data.x - 100,
            to: data.x,
            easing: "easeOutQuart"
          }
        });
      } else if (data.type === "point") {
        data.element.animate({
          x1: {
            begin: seq * delays,
            dur: durations,
            from: data.x - 10,
            to: data.x,
            easing: "easeOutQuart"
          },
          x2: {
            begin: seq * delays,
            dur: durations,
            from: data.x - 10,
            to: data.x,
            easing: "easeOutQuart"
          },
          opacity: {
            begin: seq * delays,
            dur: durations,
            from: 0,
            to: 1,
            easing: "easeOutQuart"
          }
        });
      } else if (data.type === "grid") {
        let pos1Animation = {
          begin: seq * delays,
          dur: durations,
          from: data[data.axis.units.pos + "1"] - 30,
          to: data[data.axis.units.pos + "1"],
          easing: "easeOutQuart"
        };

        let pos2Animation = {
          begin: seq * delays,
          dur: durations,
          from: data[data.axis.units.pos + "2"] - 100,
          to: data[data.axis.units.pos + "2"],
          easing: "easeOutQuart"
        };

        let animations = {};
        animations[data.axis.units.pos + "1"] = pos1Animation;
        animations[data.axis.units.pos + "2"] = pos2Animation;
        animations["opacity"] = {
          begin: seq * delays,
          dur: durations,
          from: 0,
          to: 1,
          easing: "easeOutQuart"
        };

        data.element.animate(animations);
      }
    });

    // chart.on("created", function () {
    //   if (window.__exampleAnimateTimeout) {
    //     clearTimeout(window.__exampleAnimateTimeout);
    //     window.__exampleAnimateTimeout = null;
    //   }
    //   window.__exampleAnimateTimeout = setTimeout(
    //     chart.update.bind(chart),
    //     30000
    //   );
    // });
  };

  return (
    <>
      <div className="col-xxl-12 col-md-12">
        <div className="card">
          <div className="card-block p-0 h-full">
            <div
              className="pt-30 px-30"
              style={{ height: "calc(100% - 250px);" }}
            >
              <div className="row">
                <div className="col-8 pt-30 px-30">
                  <p className="font-size-20 grey-700">CSS ANIMATION</p>
                  <p>Quisque volutpat condimentum velit. Class aptent taciti</p>
                </div>

                <div className="col-4 pt-30 px-30">
                  <div className="float-right clearfix">
                    <ul className="list-unstyled">
                      <li className="mb-5">
                        <i
                          className="icon md-circle green-600 mr-5"
                          aria-hidden="true"
                        ></i>{" "}
                        Diretary intake
                      </li>
                      <li className="mb-5">
                        <i
                          className="icon md-circle orange-600 mr-5"
                          aria-hidden="true"
                        ></i>{" "}
                        Motion
                      </li>
                      <li className="mb-5">
                        <i
                          className="icon md-circle red-600 mr-5"
                          aria-hidden="true"
                        ></i>{" "}
                        Other
                      </li>
                      <li className="mb-5">
                        <i
                          className="icon md-circle red-600 mr-5"
                          aria-hidden="true"
                        ></i>{" "}
                        Other
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="row pt-30 px-30">
              <div className="col-lg-6">
                <div className="ct-chart1" style={{ height: "300px" }}></div>
              </div>
              <div className="col-lg-6">
                <div className="ct-chart2" style={{ height: "300px" }}></div>
              </div>
            </div>
            <SmartTable />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChartistTest;
