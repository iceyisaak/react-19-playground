import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className='bg-blue-700 text-white p-3 mb-5'>
      <NavLink to={'/'}>
        <h1 className='text-2xl text-center font-bold uppercase'>
          React 19 Playground
        </h1>
      </NavLink>
    </header>
  );
};
export default Header;
