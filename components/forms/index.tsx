import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  InputProps,
  FormErrorMessage
} from '@chakra-ui/react';
import FormTextArea from './FormTextArea';

interface FormInputProps extends InputProps {
  name: string;
  title: string;
  value: string;
  handleChange: (e: React.ChangeEvent<any>) => void;
  type: string;
  placeholder?: string;
  error?: string;
  helperText?: string;
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
  ...rest
}: FormInputProps) => (
  <FormControl isInvalid={typeof error != "undefined"}>
    <FormLabel htmlFor={name}>{title}</FormLabel>
    <Input 
      name={name}
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
  FormInput,
  FormTextArea
};