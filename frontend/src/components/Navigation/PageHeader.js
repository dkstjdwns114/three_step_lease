import React from "react";
import { Link } from "react-router-dom";

const pageHeader = (props) => {
  return (
    <>
      {/* Page header */}
      <div className="page-header page-header-light">
        <div className="page-header-content header-elements-md-inline">
          <div className="page-title d-flex">
            <h4>
              <i className="icon-arrow-left52 mr-2"></i> {props.headerTitle}
            </h4>
          </div>
        </div>

        <div className="breadcrumb-line breadcrumb-line-light header-elements-md-inline">
          <div className="d-flex">
            <div className="breadcrumb">
              <Link to="/" className="breadcrumb-item">
                <i className="icon-home2 mr-2"></i> Home
              </Link>
            </div>

            <Link
              to="#"
              className="header-elements-toggle text-default d-md-none"
            >
              <i className="icon-more"></i>
            </Link>
          </div>

          <div className="header-elements d-none">
            <div className="breadcrumb justify-content-center">
              <Link to="#" className="breadcrumb-elements-item">
                <i className="icon-comment-discussion mr-2"></i>
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
