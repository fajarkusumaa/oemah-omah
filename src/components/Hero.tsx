"use client";

import React, { useEffect } from "react";
import Link from "next/link";
const Hero = () => {
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/test.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <Link href="/result">reulst</Link>
    </div>
  );
};

export default Hero;
