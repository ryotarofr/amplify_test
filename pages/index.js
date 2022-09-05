import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState } from "react";
export default function Home() {
  const [text, setText] = useState("");
  return (
    <div className={styles.container}>
      <div>入力してください</div>
      <input value={text} onChange={(event) => setText(event.target.value)} />

      <h1>{text}</h1>
    </div>
  );
}
