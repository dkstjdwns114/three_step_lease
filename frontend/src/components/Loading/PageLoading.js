import React, { useEffect } from "react";

const PageLoading = (props) => {
  useEffect(() => {});
  return (
    <>
      <div class="h-150 vertical-align text-center">
        <div class="loader vertical-align-middle loader-grill"></div>
      </div>
    </>
  );
};

export default PageLoading;
