import React from "react";

function ContentContainer({ children }) {
  return (
    <div className="absolute top-28 md:top-48 right-0 left-0 text-center md:px-24 overflow-hidden">
      {children}
    </div>
  );
}

export default ContentContainer;
