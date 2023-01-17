import { useNavigate } from 'react-router-dom';
import './navigationBar.scss';

function NavigationBar() {
  const navigate = useNavigate();

  return (
    <div className="NavBarContainer">
      <div className="navBarButtonsContainer">
        <button className="navBarButton" type="button" onClick={() => navigate('/')}>Home</button>
        <button className="navBarButton" type="button" onClick={() => navigate('/educator')}>Educator Resources</button>
      </div>
    </div>
  );
}

export default NavigationBar;