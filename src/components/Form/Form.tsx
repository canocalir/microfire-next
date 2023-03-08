import { FormMainContainer } from "./Form.styled";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";

type Inputs = {
  fullname: string;
  mail: string;
  message: string
};

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const sendEmail = (formData: any) => {
    emailjs
      .sendForm("Service_ID", "YOUR_TEMPLATE_ID", formData, "YOUR_PUBLIC_KEY")
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
        />
        {errors.fullname && <p role="alert">{errors.fullname?.message}</p>}
        <input
          placeholder="Enter your email"
          {...register("mail", { required: "Email Address is required" })}
          aria-invalid={errors.mail ? "true" : "false"}
        />
        {errors.mail && <p role="alert">{errors.mail?.message}</p>}
        <textarea
          placeholder="Enter your message"
          {...register("message", { required: "A message is required" })}
          aria-invalid={errors.message ? "true" : "false"}
        />
        {errors.message && <p role="alert">{errors.message?.message}</p>}
        <input type="submit" />
      </form>
    </FormMainContainer>
  );
};

export default Form;
