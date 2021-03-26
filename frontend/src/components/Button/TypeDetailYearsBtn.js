import React, { useEffect, useState } from "react";

const TypeDetailYearsBtn = (props) => {
  return (
    <>
      {/* <!-- Example Justified Button Group --> */}
      <p>
        To use justified button groups with <code>&lt;button&gt;</code>{" "}
        elements, you must wrap each button in a button group. Most browsers
        don't properly apply our CSS for justification to
        <code>&lt;button&gt;</code> elements, but since we support button
        dropdowns, we can work around that.
      </p>
      <div class="example example-buttons">
        <div class="btn-group btn-group-justified">
          <div class="btn-group" role="group">
            <button type="button" class="btn btn-primary">
              <i class="icon md-star" aria-hidden="true"></i>
              <br />
              <span class="text-uppercase hidden-sm-down">Favourites</span>
            </button>
          </div>

          <div class="btn-group" role="group">
            <button type="button" class="btn btn-info">
              <i class="icon md-time" aria-hidden="true"></i>
              <br />
              <span class="text-uppercase hidden-sm-down">Recent</span>
            </button>
          </div>

          <div class="btn-group" role="group">
            <button type="button" class="btn btn-success">
              <i class="icon md-account" aria-hidden="true"></i>
              <br />
              <span class="text-uppercase hidden-sm-down">Contacts</span>
            </button>
          </div>

          <div class="btn-group" role="group">
            <button type="button" class="btn btn-success">
              <i class="icon md-account" aria-hidden="true"></i>
              <br />
              <span class="text-uppercase hidden-sm-down">Contacts</span>
            </button>
          </div>
        </div>
      </div>
      {/* <!-- End Example Justified Button Group --> */}
    </>
  );
};

export default TypeDetailYearsBtn;
