import { LoginFormStyled } from "./loginFormStyled"


export const LoginFormComponent = () => {

    const submitHandler = () => {

    }

    return (
    <LoginFormStyled onSubmit={submitHandler}>

        <FormInputStyled/>
        <ButtonStyled role="submit"/>
    </LoginFormStyled>)
}