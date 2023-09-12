import CustomButton from "components/common/button/CustomButton";
import useSignup from "hooks/useSignup";
import { FieldValues, useForm } from "react-hook-form";
import { userInfo } from "types/types";
import styles from "./signup.module.scss";
import clsx from "clsx";
import { RegisterLanguageDictionaryFa } from "language";
import ContentLayout from "layout/contentLayout/ContentLayout";
function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { onSubmit, validateMobile, validatePasswordLength } = useSignup();
  const listOfInputs = [
    {
      error: errors?.firstName,
      type: "text",
      placeholder: RegisterLanguageDictionaryFa.firstName,
      name: "firstName",
      fullColumn: false,
      reqierments: {
        required: RegisterLanguageDictionaryFa.requiredField,
        pattern: {
          value: /^[\u0600-\u06FF\s]+$/,
          message: RegisterLanguageDictionaryFa.validChar,
        },
      },
      autoFocus: true,
    },
    {
      error: errors?.lastName,
      type: "text",
      placeholder: RegisterLanguageDictionaryFa.lastName,
      name: "lastName",
      fullColumn: false,
      reqierments: {
        required: RegisterLanguageDictionaryFa.requiredField,
        pattern: {
          value: /^[\u0600-\u06FF\s]+$/,
          message: RegisterLanguageDictionaryFa.validChar,
        },
      },
    },
    {
      error: errors?.mobile,
      type: "number",
      placeholder: RegisterLanguageDictionaryFa.mobile,
      name: "mobile",
      fullColumn: true,
      reqierments: {
        required: RegisterLanguageDictionaryFa.requiredField,
        validate: validateMobile,
      },
    },
    {
      error: errors?.password,
      type: "password",
      placeholder: RegisterLanguageDictionaryFa.password,
      name: "password",
      fullColumn: true,
      reqierments: {
        required: RegisterLanguageDictionaryFa.requiredField,
        pattern: {
          value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
          message: RegisterLanguageDictionaryFa.validPasswordChar,
        },
        validate: validatePasswordLength,
      },
    },
  ];
  return (
    <ContentLayout title={RegisterLanguageDictionaryFa.signup}>
      <div className={styles.formContainer}>
        <form
          className={styles.twoColumnGrid}
          onSubmit={handleSubmit((data: FieldValues) =>
            onSubmit(data as userInfo)
          )}
        >
          {listOfInputs.map((item) => {
            return (
              <label
                className={clsx(
                  styles.requiredInput,
                  item.fullColumn && styles.takeTwoColumns
                )}
              >
                <input
                  className={item?.error ? styles.invalidInput : ""}
                  placeholder={item?.placeholder}
                  type={item?.type}
                  {...register(item?.name, item?.reqierments)}
                  autoFocus={item?.autoFocus}
                />
                {item?.error && <span>{item?.error.message as string}</span>}
              </label>
            );
          })}
          <div className={clsx(styles.btnContainer, styles.takeTwoColumns)}>
            <CustomButton text={RegisterLanguageDictionaryFa.signup} filled />
          </div>
        </form>
      </div>
    </ContentLayout>
  );
}

export default SignUp;
