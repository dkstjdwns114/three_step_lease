import React from "react";

const top5Table = (props) => {
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
                  <th>Total</th>
                  <th>Remarks</th>
                </tr>
              </thead>
              <tbody>
                {props.contents.map((area, idx) => {
                  return (
                    <tr key={area.rdmAdr}>
                      <td>{idx + 1}</td>
                      <td>{area.rdmAdr}</td>
                      <td>{area.cnt}</td>
                      <td>{area.trait ? area.trait : "-"}</td>
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

export default top5Table;
