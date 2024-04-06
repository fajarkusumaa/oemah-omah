"use client";

// @refresh reset

import React, { useEffect, useState } from "react";
import Layout from "@/app/layout";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";
import { Map } from "@/components/Map";

interface Data {
  title: string;
}
const search = () => {
  const [datas, setDatas] = useState<Data[]>([]);

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
      <main className="flex gap-8 bg-neutral-50 p-6">
        <div className="order-2 w-1/3 bg-white">
          <Map items={datas} />
        </div>

        <div className="order-1 grid w-2/3 grid-cols-2 gap-4">
          {datas.map((item, i) => {
            return (
              <Card key={i}>
                <CardBody>
                  <p>{item.title}</p>
                </CardBody>
              </Card>
            );
          })}
        </div>
      </main>
    </Layout>
  );
};

export default search;
