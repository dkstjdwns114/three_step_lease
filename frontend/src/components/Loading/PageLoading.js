import React, { useEffect } from "react";

const PageLoading = (props) => {
  useEffect(() => {});
  return (
    <>
      <div className="vertical-align text-center" style={{ height: "30vh" }}>
        <div className="loader vertical-align-middle loader-grill"></div>
      </div>
    </>
  );
};

export default PageLoading;
