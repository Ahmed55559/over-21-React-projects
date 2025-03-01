import "./CustomModal.css";
function CustomModal({ id, header, body, footer, setShowModal }) {
  return (
    <div id={id ? id : "modal"}>
      <div className="modal-content">
        <header>
          {header ? header : <header>Default Modal header</header>}
          <span onClick={() => setShowModal(false)}>&times;</span>
        </header>
        <main>{body ? body : <main>Default Modal body</main>}</main>
        <footer>
          {footer ? footer : <footer>Default Modal footer</footer>}
        </footer>
      </div>
    </div>
  );
}

export default CustomModal;
