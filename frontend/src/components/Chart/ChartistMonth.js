import React, { useEffect } from "react";
import Chartist from "chartist";
import ChartistTooltip from "chartist-plugin-tooltips-updated";

const ChartistTest = (props) => {
  useEffect(() => {
    // mobile
    // let close_first_19 = [];
    // let open_first_19 = [];
    // let close_first_20 = [];
    // let open_first_20 = [];

    // let close_latter_19 = [];
    // let open_latter_19 = [];
    // let close_latter_20 = [];
    // let open_latter_20 = [];

    // let first_month = [];
    // let latter_month = [];

    // props.month_close_19.forEach((data) => {
    //   data.month_num <= 6
    //     ? (close_first_19.push({ meta: "2019년 폐업", value: data.count }),
    //       first_month.push(data.month))
    //     : (close_latter_19.push({ meta: "2019년 폐업", value: data.count }),
    //       latter_month.push(data.month));
    // });
    // props.month_open_19.forEach((data) => {
    //   data.month_num <= 6
    //     ? open_first_19.push({ meta: "2019년 개업", value: data.count })
    //     : open_latter_19.push({ meta: "2019년 개업", value: data.count });
    // });
    // props.month_close_20.forEach((data) => {
    //   data.month_num <= 6
    //     ? close_first_20.push({ meta: "2020년 폐업", value: data.count })
    //     : close_latter_20.push({ meta: "2020년 폐업", value: data.count });
    // });
    // props.month_open_20.forEach((data) => {
    //   data.month_num <= 6
    //     ? open_first_20.push({ meta: "2020년 개업", value: data.count })
    //     : open_latter_20.push({ meta: "2020년 개업", value: data.count });
    // });

    // web
    let close_19 = [];
    let open_19 = [];
    let close_20 = [];
    let open_20 = [];

    let month = [];

    props.month_close_19.forEach((data) => {
      month.push(data.month);
      close_19.push({ meta: "2019년 폐업", value: data.count });
    });
    props.month_open_19.forEach((data) => {
      open_19.push({ meta: "2019년 개업", value: data.count });
    });
    props.month_close_20.forEach((data) => {
      close_20.push({ meta: "2020년 폐업", value: data.count });
    });
    props.month_open_20.forEach((data) => {
      open_20.push({ meta: "2020년 개업", value: data.count });
    });

    setTimeout(() => {
      animationChart(".ct-chart1", month, close_19, open_19, close_20, open_20);
      // animationChart(
      //   ".ct-chart2",
      //   latter_month,
      //   close_latter_19,
      //   open_latter_19,
      //   close_latter_20,
      //   open_latter_20
      // );
    }, 500);
  }, []);

  const animationChart = (
    chartClassName,
    labelArray,
    close19,
    open19,
    close20,
    open20
  ) => {
    let chart = new Chartist.Line(
      chartClassName,
      {
        labels: labelArray,
        series: [close19, open19, close20, open20]
      },
      {
        low: 17500,
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

    // mobile은 주석
    chart.on("created", function () {
      if (window.__exampleAnimateTimeout) {
        clearTimeout(window.__exampleAnimateTimeout);
        window.__exampleAnimateTimeout = null;
      }
      window.__exampleAnimateTimeout = setTimeout(
        chart.update.bind(chart),
        30000
      );
    });
  };

  return (
    <>
      {/* mobile은 col-lg-6으로 변경 */}
      <div className="ct-chart1" style={{ height: "500px" }}></div>
      {/* mobile */}
      {/* 
          <div className="col-lg-6">
            <div className="ct-chart2" style={{ height: "300px" }}></div>
          </div>
      */}
    </>
  );
};

export default ChartistTest;
