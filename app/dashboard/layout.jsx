import Sidenav from "@/app/ui/dashboard/sidenav"
import { UserProvider } from '@auth0/nextjs-auth0/client';

const Layout = ({ children }) => {
  return (
    <UserProvider>
      <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
        <div className="w-full flex-none md:w-64">
          <Sidenav />
        </div>
        <div className="mx-auto">
          { children }
        </div>
      </div>
    </UserProvider>
  )
}

export default Layout