import React, { useEffect } from "react";

const ChartistTest = (props) => {
  useEffect(() => {
    let Chartist = require("chartist");
    // chart1
    let chart1 = new Chartist.Line(
      ".ct-chart1",
      {
        labels: ["1", "2", "3", "4", "5", "6"],
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

    let seq1 = 0;
    let delays1 = 100;
    let durations1 = 500;

    chart1.on("created", function () {
      seq1 = 0;
    });

    chart1.on("draw", function (data) {
      seq1++;

      if (data.type === "line") {
        data.element.animate({
          opacity: {
            begin: seq1 * delays1 + 2000,
            dur: durations1,
            from: 0,
            to: 1
          }
        });
      } else if (data.type === "label" && data.axis === "x") {
        data.element.animate({
          y: {
            begin: seq1 * delays1,
            dur: durations1,
            from: data.y + 100,
            to: data.y,
            easing: "easeOutQuart"
          }
        });
      } else if (data.type === "label" && data.axis === "y") {
        data.element.animate({
          x: {
            begin: seq1 * delays1,
            dur: durations1,
            from: data.x - 100,
            to: data.x,
            easing: "easeOutQuart"
          }
        });
      } else if (data.type === "point") {
        data.element.animate({
          x1: {
            begin: seq1 * delays1,
            dur: durations1,
            from: data.x - 10,
            to: data.x,
            easing: "easeOutQuart"
          },
          x2: {
            begin: seq1 * delays1,
            dur: durations1,
            from: data.x - 10,
            to: data.x,
            easing: "easeOutQuart"
          },
          opacity: {
            begin: seq1 * delays1,
            dur: durations1,
            from: 0,
            to: 1,
            easing: "easeOutQuart"
          }
        });
      } else if (data.type === "grid") {
        let pos1Animation = {
          begin: seq1 * delays1,
          dur: durations1,
          from: data[data.axis.units.pos + "1"] - 30,
          to: data[data.axis.units.pos + "1"],
          easing: "easeOutQuart"
        };

        let pos2Animation = {
          begin: seq1 * delays1,
          dur: durations1,
          from: data[data.axis.units.pos + "2"] - 100,
          to: data[data.axis.units.pos + "2"],
          easing: "easeOutQuart"
        };

        let animations = {};
        animations[data.axis.units.pos + "1"] = pos1Animation;
        animations[data.axis.units.pos + "2"] = pos2Animation;
        animations["opacity"] = {
          begin: seq1 * delays1,
          dur: durations1,
          from: 0,
          to: 1,
          easing: "easeOutQuart"
        };

        data.element.animate(animations);
      }
    });

    chart1.on("created", function () {
      if (window.__exampleAnimateTimeout) {
        clearTimeout(window.__exampleAnimateTimeout);
        window.__exampleAnimateTimeout = null;
      }
      window.__exampleAnimateTimeout = setTimeout(
        chart1.update.bind(chart1),
        30000
      );
    });

    // chart2

    let chart2 = new Chartist.Line(
      ".ct-chart2",
      {
        labels: ["7", "8", "9", "10", "11", "12"],
        series: [
          [5, 3, 4, 5, 6, 3],
          [4, 5, 3, 7, 3, 5],
          [12, 9, 7, 8, 5, 4],
          [3, 4, 5, 6, 7, 6]
        ]
      },
      {
        low: 0
      }
    );

    let seq2 = 0;
    let delays2 = 100;
    let durations2 = 500;

    chart2.on("created", function () {
      seq2 = 0;
    });

    chart2.on("draw", function (data) {
      seq2++;

      if (data.type === "line") {
        data.element.animate({
          opacity: {
            begin: seq2 * delays2 + 2000,
            dur: durations2,
            from: 0,
            to: 1
          }
        });
      } else if (data.type === "label" && data.axis === "x") {
        data.element.animate({
          y: {
            begin: seq2 * delays2,
            dur: durations2,
            from: data.y + 100,
            to: data.y,
            easing: "easeOutQuart"
          }
        });
      } else if (data.type === "label" && data.axis === "y") {
        data.element.animate({
          x: {
            begin: seq2 * delays2,
            dur: durations2,
            from: data.x - 100,
            to: data.x,
            easing: "easeOutQuart"
          }
        });
      } else if (data.type === "point") {
        data.element.animate({
          x1: {
            begin: seq2 * delays2,
            dur: durations2,
            from: data.x - 10,
            to: data.x,
            easing: "easeOutQuart"
          },
          x2: {
            begin: seq2 * delays2,
            dur: durations2,
            from: data.x - 10,
            to: data.x,
            easing: "easeOutQuart"
          },
          opacity: {
            begin: seq2 * delays2,
            dur: durations2,
            from: 0,
            to: 1,
            easing: "easeOutQuart"
          }
        });
      } else if (data.type === "grid") {
        let pos1Animation = {
          begin: seq2 * delays2,
          dur: durations2,
          from: data[data.axis.units.pos + "1"] - 30,
          to: data[data.axis.units.pos + "1"],
          easing: "easeOutQuart"
        };

        let pos2Animation = {
          begin: seq2 * delays2,
          dur: durations2,
          from: data[data.axis.units.pos + "2"] - 100,
          to: data[data.axis.units.pos + "2"],
          easing: "easeOutQuart"
        };

        let animations = {};
        animations[data.axis.units.pos + "1"] = pos1Animation;
        animations[data.axis.units.pos + "2"] = pos2Animation;
        animations["opacity"] = {
          begin: seq2 * delays2,
          dur: durations2,
          from: 0,
          to: 1,
          easing: "easeOutQuart"
        };

        data.element.animate(animations);
      }
    });

    chart2.on("created", function () {
      if (window.__exampleAnimateTimeout) {
        clearTimeout(window.__exampleAnimateTimeout);
        window.__exampleAnimateTimeout = null;
      }
      window.__exampleAnimateTimeout = setTimeout(
        chart2.update.bind(chart2),
        30000
      );
    });
  }, []);

  return (
    <>
      {/* <!-- Panel line css animation Chart --> */}
      <div className="panel">
        <div className="panel-heading">
          <h3 className="panel-title">CSS ANIMATION</h3>
        </div>
        <div className="panel-body">
          <div className="row row-lg">
            <div className="col-lg-6">
              <div className="ct-chart1" style={{ height: "300px" }}></div>
            </div>
            <div className="col-lg-6">
              <div className="ct-chart2" style={{ height: "300px" }}></div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Panel Pie --> */}
    </>
  );
};

export default ChartistTest;
