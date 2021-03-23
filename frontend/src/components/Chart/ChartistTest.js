import React, { useEffect } from "react";

const ChartistTest = (props) => {
  useEffect(() => {
    let Chartist = require("chartist");

    animationChart(Chartist, ".ct-chart1");
    animationChart(Chartist, ".ct-chart2");
  }, []);

  const animationChart = (Chartist, chartClassName) => {
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
          [12, 9, 7, 8, 5, 4],
          [4, 5, 3, 7, 3, 5],
          [5, 3, 4, 5, 6, 3],
          [3, 4, 5, 6, 7, 6]
        ]
      },
      {
        low: 0
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
      {/* <!-- Panel line css animation Chart --> */}
      <div className="row">
        <div className="col-xxl-6 col-md-12">
          <div className="card card-shadow" id="chartThreeLinearea">
            <div className="card-block p-0 h-full">
              <div
                className="pt-30 px-30"
                style={{ height: "calc(100% - 250px);" }}
              >
                <div className="row">
                  <div className="col-8">
                    <p className="font-size-20 grey-700">CSS ANIMATION</p>
                    <p>
                      Quisque volutpat condimentum velit. Class aptent taciti
                    </p>
                  </div>

                  <div className="col-4">
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
              <div className="row row-lg">
                <div className="col-lg-6">
                  <div className="ct-chart1" style={{ height: "250px" }}></div>
                </div>
                <div className="col-lg-6">
                  <div className="ct-chart2" style={{ height: "250px" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Panel Pie --> */}
    </>
  );
};

export default ChartistTest;
