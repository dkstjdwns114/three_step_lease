import React from "react";

const pageFooter = (props) => {
  return (
    <>
      <footer className="site-footer">
        <div className="site-footer-legal">
          © 2021{" "}
          <a
            href="https://github.com/dkstjdwns114/three_step_lease"
            target="_blank"
          >
            THREESTEPLEASE
          </a>
        </div>
        <div className="site-footer-right">
          Crafted with <i className="red-600 icon md-favorite"></i> by{" "}
          <a href="https://github.com/dkstjdwns114" target="_blank">
            Sung joon Ahn
          </a>
        </div>
      </footer>
    </>
  );
};

export default pageFooter;
