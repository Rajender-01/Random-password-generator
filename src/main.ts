import "./style.scss";

const GeneratePasswordButton = document.querySelector(".pwd__btn");
const CopyPassword = document.querySelector(".pwd__copy");
let PasswordInput = document.querySelector(".pwd__input");

const GenerateRandomPassword = () => {
  let GeneratedPassword = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
  for (let i = 0; i < 12; i++) {
    GeneratedPassword +=
      characters[Math.floor(Math.random() * characters.length)];
  }
  return GeneratedPassword;
};

GeneratePasswordButton?.addEventListener("click", () => {
  const password = GenerateRandomPassword();
  if (PasswordInput) {
    (PasswordInput as HTMLInputElement).value = password;
  }
});

CopyPassword?.addEventListener("click", () => {
  if (PasswordInput) {
    (PasswordInput as HTMLInputElement).select(); 
    document.execCommand("copy");
  }
});

// CopyPassword?.addEventListener("click", () => {
//   if ((PasswordInput as HTMLInputElement).value) {
//   (PasswordInput as HTMLInputElement).select(); 

//     navigator.clipboard.writeText((PasswordInput as HTMLInputElement).value).then(() => {
//       alert("Password copied to clipboard!");
//     }).catch((error) => {
//       console.error("Error copying password: ", error);
//     });
//   }
// });
