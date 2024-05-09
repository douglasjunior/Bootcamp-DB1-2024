import { Form, Input } from 'antd';

const InputText = (props) => {
  const { value, onChange, placeholder, label } = props;
  return (
    <Form.Item
      label={label}
    >
      <Input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </Form.Item>
  )
};

export default InputText;
