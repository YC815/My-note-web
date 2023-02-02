/* import Head from "next/head; */
/* import Image from "next/image"; */
/* import { Inter } from "@next/font/google"; */
/* import styles from "@/styles/Home.module.css"; */

/* const inter = Inter({ subsets: ["latin"] }); */
import React from "react";
import { Button } from "@chakra-ui/react";
import { Textarea } from "@chakra-ui/react";

import { useState } from "react";

import data from "db/note.json";
export default function Home() {
  /* function upnote() { */
  /**/
  /* } */

  const [text, setText] = useState("123");


  const handleChange = (event) => {
    setText(event.target.value);
  };
  /* const test = "123"; */

  return (
    <>
      <Textarea w="40%" minH="25vh" value={text} onChange={handleChange} />
      {/* <Textarea w="40%" minH="25vh" placeholder="在這裡輸入筆記..." />
      <Button colorScheme="blue">+</Button> */}
      {data.map((item) => (
        <div key={item.id}>
          <Textarea w="40%" minH="25vh" value={`${item.text}`} />
          {/* onChange={} */}
        </div>
      ))}
      <Button colorScheme="blue">+</Button>
    </>
  );
}
