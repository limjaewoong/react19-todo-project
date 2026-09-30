type ButtonProps = React.ComponentPropsWithoutRef<"button">;
export default function Button({ children, ...rest }: ButtonProps) {
  return (
    <>
      <button {...rest}>{children}</button>
    </>
  );
}
