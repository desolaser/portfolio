import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  InputProps,
  Textarea,
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
    {type == "textarea" ? (
      <Textarea
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        size='sm'
        {...rest}
      />
    ) : (
      <Input 
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        {...rest}
      />
    )}
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