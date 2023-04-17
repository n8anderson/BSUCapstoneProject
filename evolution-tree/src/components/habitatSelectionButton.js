import './habitatSelectionButton.scss';

function HabitatSelectionButton({item, highlighted, onPress}) {

  return (
    <button
      className={highlighted ? 'habitat-button-selected' : 'habitat-button'}
      type="button"
      onClick={onPress}>
        {item}
      </button>
  );
}

export default HabitatSelectionButton;