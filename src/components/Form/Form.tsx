import { FormMainContainer } from "./Form.styled";
import emailjs from "@emailjs/browser";
import { FC } from "react";
import { useForm } from "react-hook-form";

type Inputs = {
  fullname: string;
  mail: string;
  message: string;
};

const Form: FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const sendEmail = (formData: any) => {
    emailjs
      .sendForm(
        "service_3uhzi4a",
        "template_yrcghtt",
        formData,
        "Pu75_5lVDTiVnEvmo"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    reset();
  };
  return (
    <FormMainContainer id="contact">
      <h1>Contact</h1>
      <form onSubmit={handleSubmit(sendEmail)}>
        <input
          placeholder="Enter your fullname"
          {...register("fullname", { required: "Fullname is required" })}
          aria-invalid={errors.fullname ? "true" : "false"}
          name="user_name"
        />
        {errors.fullname && <p role="alert">{errors.fullname?.message}</p>}
        <input
          placeholder="Enter your email"
          {...register("mail", { required: "Email Address is required" })}
          aria-invalid={errors.mail ? "true" : "false"}
          name="user_email"
        />
        {errors.mail && <p role="alert">{errors.mail?.message}</p>}
        <textarea
          placeholder="Enter your message"
          {...register("message", { required: "A message is required" })}
          aria-invalid={errors.message ? "true" : "false"}
          name="message"
        />
        {errors.message && <p role="alert">{errors.message?.message}</p>}
        <input type="submit" value="Send" />
      </form>
    </FormMainContainer>
  );
};

export default Form;
