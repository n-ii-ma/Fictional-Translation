import { useSelector } from "react-redux";
import {
  selectTranslationText,
  selectisLoading,
  selecthasRejected,
} from "./translationSlice";
import HasRejected from "../../components/HasRejected";
import IsLoading from "../../components/IsLoading";

const Translation = () => {
  const translationText = useSelector(selectTranslationText);
  const isLoading = useSelector(selectisLoading);
  const hasRejected = useSelector(selecthasRejected);

  // Show Each Components if App is Loading or has Rejected, Respectively
  if (isLoading) return <IsLoading />;
  if (hasRejected) return <HasRejected />;

  return (
    <div>
      {!translationText ? (
        ""
      ) : (
        <div>
          <h3 className="translation-heading">Translation</h3>
          <div className="box">
            <p className="translation-text">{translationText}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Translation;
