import React from "react";
import InnerComponentUser from "./InnerComponentUser";
import InnerComponentCompany from "./InnerComponentCompany";

const InnerInnerComponents = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 16,
        padding: 16,
      }}
    >
      <InnerComponentUser />
      <InnerComponentCompany />
    </div>
  );
};

export default InnerInnerComponents;
