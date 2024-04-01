import React from "react";

const FooterComp = () => {
  const year = new Date().getFullYear();

  return (
    <div className=" fixed bottom-0 flex h-8 w-full items-center justify-center bg-transparent text-center">
      &copy; {year} Oemah
    </div>
  );
};

export default FooterComp;
