import { useId } from "react";

type TCheckBoxProps = Omit<
  React.ComponentPropsWithoutRef<"input">,
  "type" | "id"
> & {
  type: "checkbox";
};

const CheckBox = (props: TCheckBoxProps) => {
  const uid = useId();
  const { children, ...rest } = props;
  return (
    <>
      <div className="flex items-center gap-2 relative">
        <input
          id={uid}
          className="appearance-none w-[20px] h-[20px] border border-[#4f4f4f] rounded-[5px] checked:bg-[#4f4f4f] checked:bg-[url(/icons.svg)] checked:bg-no-repeat checked:bg-center"
          {...rest}
        />
        <label htmlFor={uid}>{children}</label>
      </div>
    </>
  );
};
export default CheckBox;
