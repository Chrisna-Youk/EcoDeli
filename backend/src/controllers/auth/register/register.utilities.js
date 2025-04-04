import { hashSync } from "bcrypt";

export function validateName(name) {
  const regex = /^[A-Za-z\s]{1,128}$/;
  return regex.test(name);
}

export function passwordHashGenerator(password) {
  return hashSync(password, 10);
}
