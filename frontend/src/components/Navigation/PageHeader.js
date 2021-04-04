import React from "react";
import { Link } from "react-router-dom";

const pageHeader = (props) => {
  return (
    <>
      <div className="page-header">
        {props.isHome ? (
          <h1 className="page-title">THREESTEPLEASE</h1>
        ) : (
          <h1 className="page-title">행정구역 상세페이지</h1>
        )}
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">홈</Link>
          </li>
          {props.isHome && <li className="breadcrumb-item active">전국</li>}
          {!props.isHome && (
            <>
              <li className="breadcrumb-item">행정구역</li>
              <li className="breadcrumb-item active">{props.city_name}</li>
            </>
          )}
        </ol>
      </div>
    </>
  );
};

export default pageHeader;
