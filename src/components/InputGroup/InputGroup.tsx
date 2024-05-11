import { ChangeEvent, FC } from 'react';
import { StyledInputGroup } from './Styled';

type Props = {
  type?: 'text' | 'password' | 'email';
  className?: string;
  name: string;
  labelText: string;
  required?: boolean;
  disabled?: boolean;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;

  error?: string;
  touched?: boolean;
  // //FIX: VALUE
};

const InputGroup: FC<Props> = ({
  type = 'text',
  className = '',
  name,
  labelText,
  required = false,
  disabled = false,
  value = '',
  onChange,
  touched,
  error,
}) => {
  return (
    <StyledInputGroup className={className} $disabled={disabled}>
      <span className="labelText">{labelText}</span>
      <input
        onChange={onChange}
        className="input"
        placeholder=" "
        type={type}
        name={name}
        value={value}
        required={required}
        disabled={disabled}
      />
      {error && touched && <span className="errorMessage">{error}</span>}
    </StyledInputGroup>
  );
};

export default InputGroup;
