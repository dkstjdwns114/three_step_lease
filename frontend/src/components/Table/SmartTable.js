import React, { useEffect, useState } from "react";
import SmartDataTable from "react-smart-data-table";
import "react-smart-data-table/dist/react-smart-data-table.css";

const SmartTableTest = (props) => {
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    setTableData([
      {
        value: "2019년 개업",
        name1: "apple",
        name2: "apple",
        name3: "apple",
        name4: "apple",
        name5: "apple",
        name6: "apple",
        name78: "apple",
        name8: "apple",
        name9: "apple",
        name11: "apple",
        phone_number: "010-1111-1111"
      },
      {
        value: "2019년 폐업",
        name1: "apple",
        name2: "apple",
        name3: "apple",
        name4: "apple",
        name5: "apple",
        name6: "apple",
        name78: "apple",
        name8: "apple",
        name9: "apple",
        name11: "apple",
        phone_number: "010-2222-2222"
      },
      {
        value: "2020년 개업",
        name1: "apple",
        name2: "apple",
        name3: "apple",
        name4: "apple",
        name5: "apple",
        name6: "apple",
        name78: "apple",
        name8: "apple",
        name9: "apple",
        name11: "apple",
        phone_number: "010-3333-3333"
      },
      {
        value: "2020년 폐업",
        name1: "apple",
        name2: "apple",
        name3: "apple",
        name4: "apple",
        name5: "apple",
        name6: "apple",
        name78: "apple",
        name8: "apple",
        name9: "apple",
        name11: "apple",
        phone_number: "010-4444-4444"
      }
    ]);
  });

  return (
    <>
      <div className="col-xxl-6">
        {/* <!-- Panel Kitchen Sink --> */}
        <div className="panel">
          <header className="panel-heading">
            <h3 className="panel-title">
              Kitchen Sink
              <span className="panel-desc">
                Swipe Mode, ModeSwitch, Minimap, Sortable, SortableSwitch
              </span>
            </h3>
          </header>
          <div className="panel-body">
            <SmartDataTable
              data={tableData}
              name="test-table"
              className="tablesaw table-striped table-bordered table-hover"
              sortable
            />
          </div>
        </div>
        {/* <!-- End Panel Kitchen Sink --> */}
      </div>
    </>
  );
};

export default SmartTableTest;
