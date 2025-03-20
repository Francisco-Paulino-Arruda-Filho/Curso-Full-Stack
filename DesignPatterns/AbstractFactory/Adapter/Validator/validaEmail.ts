import { EmailValidatorAdapter } from "../EmailValidatorAdapter";

const validaEmail = (email: string, emailValidatorProtocol: EmailValidatorAdapter): boolean => {
    return emailValidatorProtocol.isEmail(email);
}

export default validaEmail
