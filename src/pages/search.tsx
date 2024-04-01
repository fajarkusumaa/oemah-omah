"use client";

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

interface Data {
  title: string;
}
const search = () => {
  const [datas, setDatas] = useState<Data[]>([]);
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
      <main className="bg-neutral-50 p-6">
        <div className="grid grid-cols-2 gap-4">
          {datas.map((item, i) => {
            return (
              <Card>
                <CardBody>
                  <p>
                    Make beautiful websites regardless of your design
                    experience.
                  </p>
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
