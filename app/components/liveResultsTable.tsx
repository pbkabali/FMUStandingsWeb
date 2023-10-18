import { INITIAL_URL } from ".././constants"
import dataBreakDown from ".././helpers";

export default async function LiveResultsTable () {

  const fetchedData = await (await fetch(INITIAL_URL, {
    // next: { revalidate: 5 },
    cache: 'no-store'
  })).json()

  const dataObj = dataBreakDown(fetchedData)

  return (
 
    <table>
      <thead>
        <tr>
        {/* {dataObj.HeaderArray.map((val: any, index: number) => <th key={index}>{val}</th>)} */}
        {Object.values(fetchedData[6]).map((val: any, index: number) => <th key={index}>{val}</th>)}
        </tr>
      </thead>
      <tbody>
      {/* {dataObj.StandingsArray[0].map((val: any, index: number) => <td key={index}>{val}</td>)} */}
      {dataObj.StandingsArray.map((entry: any, index: number) => 
        <tr key={index}>{entry.map((val: any, index: number) => <td key={index}>{val}</td>)}</tr>
      )}
      </tbody>
    </table>
  
  )
}
