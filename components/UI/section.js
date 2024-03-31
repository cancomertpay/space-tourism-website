import React from "react";

function Section({ children, background, overflow }) {
  return (
    <section
      className={`h-screen w-full relative bg-cover bg-[url(/assets/${background}/background-${background}-mobile.jpg)] md:bg-[url(/assets/${background}/background-${background}-tablet.jpg)] lg:bg-[url(/assets/${background}/background-${background}-desktop.jpg)] ${
        overflow === "hidden" && "overflow-hidden"
      } ${overflow === "auto" && "overflow-auto"}`}
    >
      {children}
    </section>
  );
}

export default Section;
