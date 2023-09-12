import CustomButton from "components/common/button/CustomButton";
import useSignup from "hooks/useSignup";
import { FieldValues, useForm } from "react-hook-form";
import { userInfo } from "types/types";
import styles from "./signup.module.scss";
import clsx from "clsx";
function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { onSubmit, validateMobile, validatePasswordLength } = useSignup();
  return (
    <div className={styles.mainContainer}>
      <h1>ثبت نام</h1>
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
              placeholder='نام '
              type='text'
              {...register("firstName", {
                required: "پر کردن این فیلد ضروری است.",
                pattern: {
                  value: /^[\u0600-\u06FF\s]+$/,
                  message: "فقط حروف فارسی وارد کنید.",
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
              placeholder='نام خانوادگی'
              type='text'
              {...register("lastName", {
                required: "پر کردن این فیلد ضروری است.",
                pattern: {
                  value: /^[\u0600-\u06FF\s]+$/,
                  message: "فقط حروف فارسی وارد کنید.",
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
              placeholder='شماره موبایل'
              type='number'
              {...register("mobile", {
                required: "پر کردن این فیلد ضروری است.",
                validate: validateMobile,
              })}
            />
            {errors?.mobile && <span>{errors.mobile.message as string}</span>}
          </label>
          <label className={clsx(styles.takeTwoColumns, styles.requiredInput)}>
            <input
              className={errors?.password ? styles.invalidInput : ""}
              placeholder='رمز عبور'
              type='password'
              {...register("password", {
                required: "پر کردن این فیلد ضروری است.",
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
                  message:
                    "رمزعبور باید شامل حداقل یک عدد، یک حرف لاتین بزرگ و یک حرف لاتین کوچک باشد",
                },
                validate: validatePasswordLength,
              })}
            />
            {errors?.password && (
              <span>{errors.password.message as string}</span>
            )}
          </label>
          <div className={clsx(styles.btnContainer, styles.takeTwoColumns)}>
            <CustomButton text='ثبت نام' filled />
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
