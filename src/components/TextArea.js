import { useState } from "react";
import { useDispatch } from "react-redux";
import { translate } from "../features/translation/translationSlice";

// The Base End Point
const apiBase = "https://api.funtranslations.com/translate/";

const TextArea = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  // URL Address for each Translation
  const yodaAddress = `${apiBase}yoda.json?text=${text}`;
  const valyrianAddress = `${apiBase}valyrian.json?text=${text}`;
  const dothrakiAddress = `${apiBase}dothraki.json?text=${text}`;
  const morseAddress = `${apiBase}morse.json?text=${text}`;

  // Yoda Translation
  const translateYoda = (e) => {
    e.preventDefault();
    if (!text) return;

    dispatch(translate(yodaAddress));
  };

  // Valyrian Translation
  const translateValyrian = (e) => {
    e.preventDefault();
    if (!text) return;

    dispatch(translate(valyrianAddress));
  };

  // Dothraki Translation
  const translateDothraki = (e) => {
    e.preventDefault();
    if (!text) return;

    dispatch(translate(dothrakiAddress));
  };

  // Morse Translation
  const translateMorse = (e) => {
    e.preventDefault();
    if (!text) return;

    dispatch(translate(morseAddress));
  };

  return (
    <form>
      <label className="label-text" htmlFor="text">
        Original Text
      </label>
      <br />
      <textarea
        id="text"
        name="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter Text..."
        className="text-area"
        rows="7"
        cols="30"
        required
      ></textarea>
      <br />
      <button className="yoda" type="submit" onClick={translateYoda}>
        Yoda
      </button>
      <button className="valyrian" type="submit" onClick={translateValyrian}>
        Valyrian
      </button>
      <button className="dothraki" type="submit" onClick={translateDothraki}>
        Dothraki
      </button>
      <button className="morse" type="submit" onClick={translateMorse}>
        Morse
      </button>
    </form>
  );
};

export default TextArea;
