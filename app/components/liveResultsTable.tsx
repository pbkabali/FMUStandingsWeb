"use client";

import { useEffect, useState, use } from "react";

// const getLiveResults = (): Promise<any> => {

//   fetch("/api/liveResults").then(res => res.json()).then(data => { return data});
// };

export default function LiveResultsTable() {
  const [dataObj, setDataObj] = useState<any>({});

  const fetchData = () => {
    fetch("/api/liveResults").then(res => res.json()).then(data => {
      setDataObj(data.data)
      console.log(data);
    });
  };

  useEffect(() =>{
    let interval = setInterval(() => fetchData(), (10000))
    //destroy interval on unmount
    return () => clearInterval(interval)
})

  
  // const dataObj = use(getLiveResults());

  return (
    <table>
      <thead>
        <tr>{dataObj.HeaderArray?.map((val: any, index: number) => <th key={index}>{val}</th>)}</tr>
      </thead>
      <tbody>
        {/* {dataObj.StandingsArray[0].map((val: any, index: number) => <td key={index}>{val}</td>)} */}
        {dataObj.StandingsArray?.map((entry: any, index: number) => (
          <tr key={index}>
            {entry.map((val: any, index: number) => (
              <td key={index}>{val}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    // <h1>Paul</h1>
  );
}
