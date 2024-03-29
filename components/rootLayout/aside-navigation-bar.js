// custom components
import Modal from "../UI/modal";

function AsideNavigationBar({ onClose }) {
  return (
    <nav>
      <Modal onClose={onClose} />
    </nav>
  );
}

export default AsideNavigationBar;
