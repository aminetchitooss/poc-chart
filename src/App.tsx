import './App.scss';
import { NavLink, Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <nav id="sidebar">
        <ul>
          <li>
            <NavLink to={`recharts`} className={({ isActive }) => (isActive ? 'active' : '')}>
              Recharts exmaple
            </NavLink>
          </li>
          <li>
            <NavLink to={`/chartjs`} className={({ isActive }) => (isActive ? 'active' : '')}>
              ChartJs example
            </NavLink>
          </li>
        </ul>
      </nav>
      <div id="content">
        <Outlet />
      </div>
    </>
  );
}

export default App;
