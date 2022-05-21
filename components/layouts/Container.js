import React from "react";

const Container = ({ children }) => {
  return (
    <div className="px-6 py-12 lg:px-12 lg:py-16 max-w-screen-xl">
      {children}
    </div>
  );
};

export default Container;