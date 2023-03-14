import { successToast } from "@/helpers/successToast";
import { AlertContainer, FormMainContainer } from "./Form.styled";
import emailjs from "@emailjs/browser";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { errorToast } from "@/helpers/errorToast";
import { useTranslation } from "next-i18next";

type Inputs = {
  user_name: string;
  user_email: string;
  message: string;
};

const Form: FC = () => {
  const {t} = useTranslation("")
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const sendEmail = (formData: any) => {
    emailjs
      .send(
        "service_3uhzi4a",
        "template_yrcghtt",
        formData,
        "Pu75_5lVDTiVnEvmo"
      )
      .then(
        (result) => {
          successToast("Mesajınız gönderilmiştir!")
        },
        (error) => {
          errorToast("Gönderim sırasında sorun oluştu!")
        }
      );
    reset();
  };
  const formNamePlaceHolder:string = t("main.formNamePlaceholder")
  const formEmailPlaceHolder:string = t("main.formEmailPlaceholder")
  const formMessagePlaceholder:string = t("main.formMessagePlaceholder")
  const formSubmitButtonText:string = t("main.formSubmitButton")

  return (
    <FormMainContainer id="contact">
      <h1>{t("main.formTitle")}</h1>
      <form onSubmit={handleSubmit(sendEmail)}>
        <AlertContainer>
        <input
          placeholder={formNamePlaceHolder}
          {...register("user_name", { required: "Fullname is required" })}
          aria-invalid={errors?.user_name ? "true" : "false"}
          name="user_name"
        />
        {errors.user_name && <p role="alert">{errors?.user_name?.message}</p>}
        </AlertContainer>
        <AlertContainer>
        <input
          placeholder={formEmailPlaceHolder}
          {...register("user_email", { required: "Email Address is required" })}
          aria-invalid={errors?.user_email ? "true" : "false"}
          name="user_email"
        />
        {errors.user_email && <p role="alert">{errors?.user_email?.message}</p>}
        </AlertContainer>
        <AlertContainer>
        <textarea
          placeholder={formMessagePlaceholder}
          {...register("message", { required: "A message is required" })}
          aria-invalid={errors?.message ? "true" : "false"}
          name="message"
        />
        {errors.message && <p role="alert">{errors.message?.message}</p>}
        </AlertContainer>
        <input type="submit" value={formSubmitButtonText} />
      </form>
    </FormMainContainer>
  );
};

export default Form;
