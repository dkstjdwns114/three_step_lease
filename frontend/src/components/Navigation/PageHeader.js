import React from "react";
import { Link } from "react-router-dom";

const pageHeader = (props) => {
  return (
    <>
      {/* Page header */}
      <div class="page-header page-header-light">
        <div class="page-header-content header-elements-md-inline">
          <div class="page-title d-flex">
            <h4>
              <i class="icon-arrow-left52 mr-2"></i> {props.headerTitle}
            </h4>
          </div>
        </div>

        <div class="breadcrumb-line breadcrumb-line-light header-elements-md-inline">
          <div class="d-flex">
            <div class="breadcrumb">
              <Link to="/" class="breadcrumb-item">
                <i class="icon-home2 mr-2"></i> Home
              </Link>
            </div>

            <Link to="#" class="header-elements-toggle text-default d-md-none">
              <i class="icon-more"></i>
            </Link>
          </div>

          <div class="header-elements d-none">
            <div class="breadcrumb justify-content-center">
              <Link to="#" class="breadcrumb-elements-item">
                <i class="icon-comment-discussion mr-2"></i>
                Support
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* /page header */}
    </>
  );
};

export default pageHeader;
