function Clear({ handler, title }) {
  return (
    <button title={title} className="clear-btn" onClick={handler}>
      CLEAR LIST
    </button>
  );
}
export default Clear;
