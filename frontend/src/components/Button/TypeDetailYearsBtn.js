import React, { useEffect, useState } from "react";

const TypeDetailYearsBtn = (props) => {
  return (
    <>
      <p>
        To use justified button groups with <code>&lt;button&gt;</code>{" "}
        elements, you must wrap each button in a button group. Most browsers
        don't properly apply our CSS for justification to
        <code>&lt;button&gt;</code> elements, but since we support button
        dropdowns, we can work around that.
      </p>
      <div className="example example-buttons">
        <div className="btn-group btn-group-justified">
          <div className="btn-group" role="group">
            <button type="button" className="btn btn-primary">
              <i className="icon md-star" aria-hidden="true"></i>
              <br />
              <span className="text-uppercase hidden-sm-down">Favourites</span>
            </button>
          </div>

          <div className="btn-group" role="group">
            <button type="button" className="btn btn-info">
              <i className="icon md-time" aria-hidden="true"></i>
              <br />
              <span className="text-uppercase hidden-sm-down">Recent</span>
            </button>
          </div>

          <div className="btn-group" role="group">
            <button type="button" className="btn btn-success">
              <i className="icon md-account" aria-hidden="true"></i>
              <br />
              <span className="text-uppercase hidden-sm-down">Contacts</span>
            </button>
          </div>

          <div className="btn-group" role="group">
            <button type="button" className="btn btn-success">
              <i className="icon md-account" aria-hidden="true"></i>
              <br />
              <span className="text-uppercase hidden-sm-down">Contacts</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TypeDetailYearsBtn;
