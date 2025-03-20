import { EmailValidatorAdapter } from "./EmailValidatorAdapter";
import validaEmail from "./Validator/validaEmail";

const email = new EmailValidatorAdapter();

const isValid = validaEmail('amancio@', email);
