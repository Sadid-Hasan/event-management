import { NavLink } from "react-router-dom";

const Navigation = () => {
    const menus =<>
        <li><NavLink to ="/">Home</NavLink></li>
        <li><NavLink to ="/Service">Service</NavLink></li>
    </>
    return (
    <div className="navbar font-poppins bg-slate-50">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {menus}
      </ul>
    </div>
    <a className="btn btn-ghost font-cursive text-green-700 normal-case text-3xl">Entertainix</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {menus}
    </ul>
  </div>
  <div className="navbar-end">
  <ul className="menu menu-horizontal px-1">
            <li><NavLink to ="/Login">Login</NavLink></li>
            <li><NavLink to ="/Signup">Sign Up</NavLink></li>
          </ul>
  </div>
</div>
    );
};

export default Navigation;