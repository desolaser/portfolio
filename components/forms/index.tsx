import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  FormErrorMessage
} from '@chakra-ui/react'

interface FormInputProps {
  id: string;
  title: string;
  value: string;
  error: object;
  placeholder: string;
  handleChange: VoidFunction;
  type: string;
}

const FormInput = ({ 
  id,
  title,
  value,
  error,
  placeholder,
  handleChange,
  type
}: FormInputProps) => (
  <FormControl>
    <FormLabel htmlFor={id}>{title}</FormLabel>
    <Input 
      id={id} 
      type={type}
      value={value}
      placeholder={placeholder}
      handleChange={handleChange}
    />
    {!error ? (
      <FormHelperText>
        Enter the email you'd like to receive the newsletter on.
      </FormHelperText>
    ) : (
      <FormErrorMessage>{error}</FormErrorMessage>
    )}
  </FormControl>
)

export {
  FormInput
}