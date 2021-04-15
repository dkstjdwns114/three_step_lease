import React, { useEffect, useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import CustomNoRowsOverlay from "./CustomNoRowsOverlay";

import "./dataGrid.css";

const RealTimeCategoryEmpty = (props) => {
  return (
    <>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={[]}
          columns={{ field: "empty", headerName: " " }}
          components={{ NoRowsOverlay: CustomNoRowsOverlay }}
          hideFooter={true}
          hideFooterPagination={true}
          headerHeight={0}
        />
      </div>
    </>
  );
};

export default RealTimeCategoryEmpty;
