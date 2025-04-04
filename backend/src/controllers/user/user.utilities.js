export function validateFirstName(firstName) {
  const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ ]{1,128}$/;
  return regex.test(firstName);
}

export function validateLastName(lastName) {
  const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ ]{1,128}$/;
  return regex.test(lastName);
}
