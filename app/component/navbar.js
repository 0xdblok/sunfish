import React from "react";
import Btnone from "./btnone";
import Btntwo from "./btntwo";
import Btnthree from "./btnthree";

export default function Navbar() {
  return (
    <div>
      <div className="flex justify-center items-center gap-4">
        {" "}
        <Btnone />
        <Btntwo />
        <Btnthree />
      </div>
    </div>
  );
}
