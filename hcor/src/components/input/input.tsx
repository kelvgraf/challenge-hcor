type IInputProps = {
  value: string | number;
  onChange: (e) => void;
  type?: string;
  className?: string;
  placeholder: string;
};

function Input({ value, onChange, type, className, placeholder }: IInputProps) {
  return (
    <input
      value={value}
      onChange={(e) => {
        const event = {
          target: {
            value: e.target.value,
          },
        } as React.ChangeEvent<HTMLInputElement>;

        onChange?.(event);
      }}
      type={type}
      className={className}
      placeholder={placeholder}
    />
  );
}

export { Input };
