import { Form, Input } from 'antd';
import { useState } from 'react';

const InputText = (props) => {
  const { value, onChange, placeholder, label, validate } = props;

  const [errorMessage, setErrorMessage] = useState(undefined);
  const [changed, setChanged] = useState(false);

  const validateStatus = errorMessage === undefined ? 'success' : 'error';

  const handleChange = (event) => {
    // undefined -> caso o input esteja válido
    // string -> caso o input esteja inválido
    const message = validate(event.target.value);
    setErrorMessage(message);
    onChange(event);
    setChanged(true);
  }

  const handleBlur = (event) => {
    const message = validate(event.target.value);
    setErrorMessage(message);
    setChanged(true);
  } 

  return (
    <Form.Item
      label={label}
      help={errorMessage}
      hasFeedback={changed}
      validateStatus={validateStatus}
    >
      <Input
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        // resolve perda de foco ao iniciar digitação
        suffix=" "
        onBlur={handleBlur}
      />
    </Form.Item>
  )
};

export default InputText;
