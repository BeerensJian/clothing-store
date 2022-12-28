import { useRef, useState } from "react";
import "./form-input.styles.scss";

const FormInput = ({ label, ...otherProps }) => {
  const [shrink, setShrink] = useState(false);
  const inputRef = useRef();

  const shrinkHandler = () => {
    if (!inputRef.current.value.length) {
      setShrink(false);
    } else {
      setShrink(true);
    }
  };

  console.log(shrink);

  return (
    <div className="group">
      <input
        onChange={shrinkHandler}
        ref={inputRef}
        className="form-input"
        {...otherProps}
      />
      {label && (
        <label className={`${shrink ? "shrink" : ""} form-input-label`}>
          {label}
        </label>
      )}
    </div>
  );
};
export default FormInput;
