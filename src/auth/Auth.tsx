import { useState } from 'react';
import Button from '../components/Button';
import CheckBox from '../components/Checkbox';
import Input from '../components/Input';
import useCheckbox from '../hooks/useCheckbox';
import useReset from '../hooks/useReset';
import useInput from '../hooks/useInput';

const Auth = () => {
  const [type, setType] = useState("Sign");
  const [name, onChangeName, resetName] = useInput("");
  const [email, onChangeEmail, resetEmail] = useInput("");
  const [password, onChangePassword, resetPassword] = useInput("");
  const [checked, onChangeChecked, resetChecked] = useCheckbox(false);
  const resetAll = useReset(resetName, resetEmail, resetPassword, resetChecked);

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const loginValidation =
      email.trim() === "" || password.trim() === "" || !checked;
    const signupValidation = loginValidation || name.trim() === "";

    if (type === "Login" && loginValidation) {
      alert("빈 칸을 다 입력하세요");
      return;
    }

    if (type === "Sign" && signupValidation) {
      alert("빈 칸을 다 입력하세요");
      return;
    }

    alert(type === "Login" ? "로그인 성공" : "회원가입 성공");
  };
  return (
    <>
      <div className="item-middle bg-black">
        <div className="w-[375px] rounded-lg bg-white border border-[#D1D1D1] py-10 px-[25px] text-[#4f4f4f]">
          <h1 className="text-xl font-bold mb-[10px]">{type} Into App</h1>
          <p className="text-sm mb-5">Please enter your details to continue.</p>
          <form className="grid gap-4" onSubmit={onSubmitHandler}>
            {type === "Sign" && (
              <Input
                type="text"
                placeholder="Enter Your Name"
                value={name}
                onChange={onChangeName}
              />
            )}
            <Input
              type="email"
              placeholder="someone@example.com"
              value={email}
              onChange={onChangeEmail}
            />
            <Input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={onChangePassword}
            />
            <CheckBox
              type="checkbox"
              checked={checked}
              onChange={onChangeChecked}
            >
              <span className="text-sm color-[#4f4f4f]">
                I agree with <em className="not-italic font-bold">terms</em> and{" "}
                <em className="not-italic font-bold">policies</em>.
              </span>
            </CheckBox>
            <div className="mt-4 grid gap-4">
              <Button
                type="submit"
                className="w-full bg-[#4F4F4F] text-[#F5F5F5] rounded-lg"
              >
                {type} In
              </Button>
              <Button
                type="button"
                className="w-full border border-[#4f4f4f] text-[#4f4f4f] rounded-lg"
                onClick={() => {
                  setType((type) => (type === "Login" ? "Sign" : "Login"));
                  resetAll();
                }}
              >
                Go To {type === "Sign" ? "Login" : "Sign Up"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Auth;