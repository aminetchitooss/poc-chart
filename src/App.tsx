import './App.scss';
import { Link, Outlet } from 'react-router-dom';
import { CustomTooltip } from './components/CustomTooltip/CustomTooltip';

function App() {
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
        {/* <Outlet /> */}
        <CustomTooltip
          active={true}
          label="Page A"
          payload={[
            { value: 9, color: 'darkred' },
            { value: 50, color: 'dodgerblue' }
          ]}
        />
      </div>
    </>
  );
}

export default App;
