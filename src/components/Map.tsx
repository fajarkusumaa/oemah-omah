import React from "react";
// @refresh reset
import dynamic from "next/dynamic";

const DynamicMap = dynamic(() => import("@/components/DynamicMap"), {
  ssr: false,
});

export const Map = ({ items }: { item: any }) => {
  return (
    <>
      <DynamicMap items={items} />
    </>
  );
};
