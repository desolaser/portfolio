import {
  FormControl,
  FormLabel,
  FormHelperText,
  Textarea,
  TextareaProps,
  FormErrorMessage
} from '@chakra-ui/react';

interface FormTextAreaProps extends TextareaProps {
  name: string;
  title: string;
  value: string;
  handleChange: (e: React.ChangeEvent<any>) => void;
  placeholder?: string;
  error?: string;
  helperText?: string;
};

const FormTextArea = ({ 
  name,
  title,
  value,
  error,
  placeholder,
  handleChange,
  helperText,
  ...rest
}: FormTextAreaProps) => (
  <FormControl isInvalid={typeof error != "undefined"}>
    <FormLabel htmlFor={name}>{title}</FormLabel>
    <Textarea 
      name={name}
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

export default FormTextArea;