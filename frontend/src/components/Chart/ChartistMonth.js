import React, { useEffect } from "react";
import Chartist from "chartist";
import ChartistTooltip from "chartist-plugin-tooltips-updated";

const ChartistTest = (props) => {
  useEffect(() => {
    let close_19 = [];
    let open_19 = [];
    let close_20 = [];
    let open_20 = [];

    let month = [];

    props.month_close_19.forEach((data) => {
      month.push(data.month_num + "월");
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
        plugins: [ChartistTooltip()]
      }
    );

    let seq = 0;
    let delays = 50;
    let durations = 250;

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
  };

  return (
    <>
      <div className="ct-chart1" style={{ height: "500px" }}></div>
    </>
  );
};

export default ChartistTest;
