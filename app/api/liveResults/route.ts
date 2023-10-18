import { INITIAL_URL } from "@/app/constants"
import dataBreakDown from "@/app/helpers"

export async function GET(req: Request) {
  // return new Response("herreeee")

  const fetchedData = await (await fetch(INITIAL_URL, {
    next: { revalidate: 5 },
    // cache: 'no-store'
  })).json()

  const data = dataBreakDown(fetchedData)
  return Response.json({data})
}
