import React from "react";
import { Link } from "react-router-dom";

const BasicTable = (props) => {
  return (
    <>
      {/* Bordered table */}
      <div className="col-md-6">
        <div className="card">
          <div className="card-header header-elements-inline">
            <h5 className="card-title">{props.cardTitle}</h5>
          </div>
          <div className="card-body">{props.cardDesc}</div>
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Rate</th>
                  <th>Address</th>
                  <th>Count</th>
                  <th>Remarks</th>
                </tr>
              </thead>
              <tbody>
                {props.contents.map((area) => {
                  return (
                    <tr>
                      <td>{area.rate}</td>
                      <td>{area.info.location}</td>
                      <td>{area.info.cnt}개</td>
                      <td>{area.info.trait ? area.info.trait : "-"}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* /bordered table  */}
    </>
  );
};

export default BasicTable;
