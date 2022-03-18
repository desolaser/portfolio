import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  InputProps,
  FormErrorMessage
} from '@chakra-ui/react';

interface FormInputProps extends InputProps {
  name: string;
  title: string;
  value: string;
  placeholder: string;
  handleChange: (e: React.ChangeEvent<any>) => void;
  type: string;
  error?: string;
  helperText?: string;
  id?: string;
};

const FormInput = ({ 
  name,
  title,
  value,
  error,
  placeholder,
  handleChange,
  type,
  helperText,
  id,
  ...rest
}: FormInputProps) => (
  <FormControl>
    <FormLabel htmlFor={id}>{title}</FormLabel>
    <Input 
      name={name}
      id={id} 
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
      {...rest}
    />
    {!error ? (
      <FormHelperText>
        {helperText}
      </FormHelperText>
    ) : (
      <FormErrorMessage>{error}</FormErrorMessage>
    )}
  </FormControl>
);

export {
  FormInput
};