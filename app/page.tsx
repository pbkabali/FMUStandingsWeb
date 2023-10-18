import Link from "next/link"
// import { INITIAL_URL } from "./constants"
// import dataBreakDown from "./helpers";
import LiveResultsTable from "./components/liveResultsTable";
// import { useEffect, useState } from "react";


export default function Home () {

  // const [rerender, setRerender] = useState(false);

  // useEffect(()=>{
  //     // setRerender(!rerender);
  //     setTimeout(() => {
  //       setRerender(!rerender);
  //     }, 10000);
  // }, []);

  return (
    <main>
    <h1>Welcome</h1>
    <Link href='/LiveResults'>Live Results</Link>
   <LiveResultsTable />
    </main>
  )
}
