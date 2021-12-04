const TextArea = () => {
  return (
    <form>
      <label className="label-text" htmlFor="text">
        Original Text
      </label>
      <br />
      <textarea
        id="text"
        name="text"
        placeholder="Enter Text..."
        className="text-area"
        rows="10"
        cols="30"
        required
      >
        Master Obiwan has lost a planet.
      </textarea>
      <br />
      <button className="yoda">Yoda</button>
      <button className="valyrian">Valyrian</button>
      <button className="dothraki">Dothraki</button>
      <button className="morse">Morse</button>
    </form>
  );
};

export default TextArea;
