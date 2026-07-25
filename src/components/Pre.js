import React from "react";

function Pre({ load }) {
  return (
    <div id={load ? "preloader" : "preloader-none"}>
      <div className="preloader-mark">
        <span>N</span>

        <span
          className="preloader-dot"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}

export default Pre;