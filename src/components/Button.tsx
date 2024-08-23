import { twMerge } from "tailwind-merge";
type TButtonProps = React.ComponentPropsWithoutRef<"button">;
const Button = (props: TButtonProps) => {
  const { children, className, ...rest } = props;
  return (
    <>
      <button
        className={twMerge(
          `inter w-[77px] h-[44px] text-sm text-white font-medium rounded-lg`,
          className
        )}
        {...rest}
      >
        {children}
      </button>
    </>
  );
};
export default Button;
