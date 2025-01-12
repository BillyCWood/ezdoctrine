import Sidenav from "../ui/dashboard/sidenav"
import { getSession } from "@auth0/nextjs-auth0";
import { UserProvider } from '@auth0/nextjs-auth0/client';

const Layout = async ({ children }) => {
  const session = await getSession();
  return (
    <UserProvider user={session?.user}>
      <div className="flex flex-col md:flex-row md:overflow-hidden grow">
        <div className="w-full flex-none md:w-64 bg-orange-200">
          <Sidenav />
        </div>
        <div className="w-full bg-slate-300">
          { children }
        </div>
      </div>
    </UserProvider>
  )
}

export default Layout