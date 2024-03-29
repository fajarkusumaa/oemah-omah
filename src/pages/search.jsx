"use client";

import React, { useEffect, useState } from "react";
import Layout from "@/app/layout";

const search = () => {
  const [datas, setDatas] = useState([]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/test.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setDatas(data.hits);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <Layout>
      <main>
        {datas.map((item, i) => (
          <p key={i}>{item.title}</p>
        ))}
      </main>
    </Layout>
  );
};

export default search;
