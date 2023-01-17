import { ArrowLeftCircle } from "react-feather";
import { useNavigate } from 'react-router-dom';
import './backButton.scss';

function BackButton() {
  const navigate = useNavigate();

  return (
    <ArrowLeftCircle
    onClick={() => navigate(-1)}
    size={40}
    className="back-button"
  />
  );
}

export default BackButton;