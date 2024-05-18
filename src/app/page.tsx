import Login from "./component/Login/page";
import Signup from "./component/Signup/page"
import ViewData from "./component/ViewData/page";
import Admin from "./authenticators/adminSignup/page";
import Vendor from "./authenticators/vendorSignup/page";
export default function Home() {
  return (
    <div>
      {/* <Admin/> */}
      <Vendor/>
      {/* <Signup/> */}
       {/* <Login/> */}
      {/* <ViewData/> */}
    </div>
  );
}
