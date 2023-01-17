import { useNavigate } from 'react-router-dom';
import './treeButton.scss';

function TreeButton({item, navigatePath}) {
  const navigate = useNavigate();

  return (
    <button className="tree-button" type="button" onClick={() => navigate(`/${navigatePath}`)}>{item}</button>
  );
}

export default TreeButton;