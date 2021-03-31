import React from 'react'
import { 
Container,
FormWrap,
Icon,
FormContent,
FormH1,
Form,
FormButton, 
Text,
FormInput, 
FormLabel 
} from './SigninElements'

const Signin = () => {
    return (
        <>
          <Container>
           <FormWrap>
            <Icon to="/">Invest</Icon>
            <FormContent>
                <Form action="#">
                    <FormH1>Sign in to your account</FormH1>
                    <FormLabel htmlFor='for'>Email</FormLabel>
                    <FormInput type="email" required />
                    <FormLabel htmlFor="for">Passowrd</FormLabel>
                    <FormInput type="password" required />
                    <FormButton type="submit">Continue</FormButton>
                    <Text>Forgot password</Text>
                </Form>
            </FormContent>
           </FormWrap>  
          </Container>   
        </>
    )
}

export default Signin;
