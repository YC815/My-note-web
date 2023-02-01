/* import Head from "next/head; */
/* import Image from "next/image"; */
/* import { Inter } from "@next/font/google"; */
/* import styles from "@/styles/Home.module.css"; */

/* const inter = Inter({ subsets: ["latin"] }); */
import { Button } from "@chakra-ui/react";
import { Textarea } from "@chakra-ui/react";
export default function Home() {
  return (
    <>
      <input></input>
      <Textarea w="40%" minH="25vh" placeholder="在這裡輸入筆記..." />
      <Button colorScheme="blue">+</Button>
    </>
  );
}
