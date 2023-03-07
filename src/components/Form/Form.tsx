import { FormMainContainer } from "./Form.styled"

const Form = () => {
  return (
    <FormMainContainer>
        <h1>Contact</h1>
          <form>
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="submit" value="Send Message" />
          </form>
        </FormMainContainer>
  )
}

export default Form