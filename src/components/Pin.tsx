import React from "react";
import { Marker, Popup } from "react-leaflet";

import dynamic from "next/dynamic";

const DynamicPin = dynamic(() => import("@/components/DynamicPin"), {
  ssr: false,
});

const Pin = ({ item }: { item: any }) => {
  console.log(item);
  return <DynamicPin item={item} />;
};

export default Pin;
