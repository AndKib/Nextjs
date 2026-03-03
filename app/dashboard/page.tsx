import { headers } from "next/headers";
import { auth } from "@/lib/auth";

 async function DashboardPage() {

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if(!session?.user) {
    return (
      <h1 className="mt-10 text-center">DU MÅ LOGGE INN!</h1>
    )
  }

  session?.session

  return (
    <div className="text-center mt-10">Du er nå på DashboardPage
     <pre>{JSON.stringify(session?.user, null, 2)}</pre>
    </div>
   
  )
} 

export default DashboardPage;