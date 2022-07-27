import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";

import Router from "next/router";

export default function Home() {
  useEffect(() => {
    const { pathname } = Router;
    if (pathname == "/") {
      Router.push("/login");
    }
  });
}

// import Head from "next/head";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";
// import Link from "next/link";
// import Script from "next/script";

// function Home({ drivers }) {
//   return (
//     <div>
//       <div className={styles.container}>
//         <Link href="/dashboard">
//           <button className={styles.button}>Redirect to Admin</button>
//         </Link>
//       </div>
//     </div>
//   );
// }

// export async function getServerSideProps() {
//   const connection_string = "http://localhost:3000/api/";
//   const headers = {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//   };
//   const [passengersDB, driversDB] = await Promise.all([
//     fetch(connection_string + "passengers", headers),
//     fetch(connection_string + "drivers", headers),
//   ]);

//   const passengersCollection = await passengersDB.json();
//   const passengers = passengersCollection.passengers;

//   const driversCollection = await driversDB.json();
//   const drivers = driversCollection.drivers;

//   return {
//     props: {
//       drivers,
//     },
//   };
// }
// export default Home;
