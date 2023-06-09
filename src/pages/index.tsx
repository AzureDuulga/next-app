import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
export default function Home() {
  const [movies, setMovies] = useState([]);
  const getMovies = () => {
    axios
      .get("http://localhost:8000/movies/")
      .then((res) => {
        console.log("RESPONSE====>", res.data.movies);
        setMovies(res.data.movies);
      })
      .catch((err) => {
        console.log("Err", err);
      });
  };
  useEffect(() => {
    getMovies();
  }, []);
  console?.log(movies);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {movies.map((el: any) => (
          <div key={el._id}>
            <p>{el.title}</p>
          </div>
        ))}
      </main>
    </>
  );
}
