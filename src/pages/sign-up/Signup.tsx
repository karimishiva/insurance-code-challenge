import CustomButton from "components/common/button/CustomButton";
import useSignup from "hooks/useSignup";
import { FieldValues, useForm } from "react-hook-form";
import { userInfo } from "types/types";
import styles from "./signup.module.scss";
import clsx from "clsx";
import { RegisterLanguageDictionaryFa } from "language";
function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { onSubmit, validateMobile, validatePasswordLength } = useSignup();
  return (
    <div className={styles.mainContainer}>
      <h1>{RegisterLanguageDictionaryFa.signup}</h1>
      <div>
        <form
          className={styles.twoColumnGrid}
          onSubmit={handleSubmit((data: FieldValues) =>
            onSubmit(data as userInfo)
          )}
        >
          <label className={styles.requiredInput}>
            <input
              className={errors?.firstName ? styles.invalidInput : ""}
              placeholder={RegisterLanguageDictionaryFa.firstName}
              type='text'
              {...register("firstName", {
                required: RegisterLanguageDictionaryFa.requiredField,
                pattern: {
                  value: /^[\u0600-\u06FF\s]+$/,
                  message: RegisterLanguageDictionaryFa.validChar,
                },
              })}
              autoFocus
            />
            {errors?.firstName && (
              <span>{errors.firstName.message as string}</span>
            )}
          </label>
          <label className={styles.requiredInput}>
            <input
              className={errors?.lastName ? styles.invalidInput : ""}
              placeholder={RegisterLanguageDictionaryFa.lastName}
              type='text'
              {...register("lastName", {
                required: RegisterLanguageDictionaryFa.requiredField,
                pattern: {
                  value: /^[\u0600-\u06FF\s]+$/,
                  message: RegisterLanguageDictionaryFa.validChar,
                },
              })}
            />
            {errors?.lastName && (
              <span>{errors.lastName.message as string}</span>
            )}
          </label>
          <label className={clsx(styles.takeTwoColumns, styles.requiredInput)}>
            <input
              className={errors?.mobile ? styles.invalidInput : ""}
              placeholder={RegisterLanguageDictionaryFa.mobile}
              type='number'
              {...register("mobile", {
                required: RegisterLanguageDictionaryFa.requiredField,
                validate: validateMobile,
              })}
            />
            {errors?.mobile && <span>{errors.mobile.message as string}</span>}
          </label>
          <label className={clsx(styles.takeTwoColumns, styles.requiredInput)}>
            <input
              className={errors?.password ? styles.invalidInput : ""}
              placeholder={RegisterLanguageDictionaryFa.password}
              type='password'
              {...register("password", {
                required: RegisterLanguageDictionaryFa.requiredField,
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
                  message: RegisterLanguageDictionaryFa.validPasswordChar,
                },
                validate: validatePasswordLength,
              })}
            />
            {errors?.password && (
              <span>{errors.password.message as string}</span>
            )}
          </label>
          <div className={clsx(styles.btnContainer, styles.takeTwoColumns)}>
            <CustomButton text={RegisterLanguageDictionaryFa.signup} filled />
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
