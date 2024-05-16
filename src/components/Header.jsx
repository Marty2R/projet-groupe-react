import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="mb-5 flex justify-end">
      <nav>
        <ul className="flex items-center gap-5">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/add">Add</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
