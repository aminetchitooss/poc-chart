import { useState } from 'react';
import './App.scss';
import { Link, Outlet } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <nav id="sidebar">
        <ul>
          <li>
            <Link to={`recharts`}>Recharts exmaple</Link>
          </li>
          <li>
            <Link to={`/chartjs`}>ChartJs example</Link>
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
