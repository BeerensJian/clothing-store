import { useRef, useState } from "react";
import { FormInputLabel, Input, Group } from "./form-input.styles.jsx";

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

  return (
    <Group>
      <Input onChange={shrinkHandler} ref={inputRef} {...otherProps} />
      {label && <FormInputLabel shrink={shrink}>{label}</FormInputLabel>}
    </Group>
  );
};
export default FormInput;
