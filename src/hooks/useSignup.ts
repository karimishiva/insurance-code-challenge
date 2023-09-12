import { signupAPI } from "api/services/signupAPI";
import { RegisterLanguageDictionaryFa } from "language";
import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "store";
import { userInfo } from "types/types";

const useSignup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const registerMutate = useMutation(signupAPI);
  const onSubmit = async (data: userInfo) => {
    await registerMutate.mutateAsync(data);
    localStorage.setItem("firstName", data.firstName);
    localStorage.setItem("lastName", data.lastName);
    dispatch(register(data));
    navigate("/select-insurance");
  };
  const validateMobile = (mobile: string) => {
    if (mobile.length !== 11)
      return RegisterLanguageDictionaryFa.wrongPhoneNumber;
  };
  const validatePasswordLength = (password: string) => {
    if (password?.length < 4 || password?.length > 10)
      return RegisterLanguageDictionaryFa.validPasswordLenght;
  };

  return {
    onSubmit,
    validateMobile,
    validatePasswordLength,
    registerMutate,
  };
};

export default useSignup;
