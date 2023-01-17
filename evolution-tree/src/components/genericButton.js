import './genericButton.scss';

function GenericButton({item, onPress, path}) {

  return (
    <button
      className="gen-button"
      type="button"
      onClick={() => {
        window.sessionStorage.setItem('species', path)
        onPress(path)
      }}>
        {item}
      </button>
  );
}

export default GenericButton;