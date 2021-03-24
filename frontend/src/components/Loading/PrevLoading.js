import React, { useEffect } from "react";

const Loading = (props) => {
  useEffect(() => {});
  return (
    <>
      <div class="card animated rotateIn">
        <div className="card-body" style={{ textAlign: "center" }}>
          Loading...
        </div>
      </div>
    </>
  );
};

export default Loading;
