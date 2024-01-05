const passwordBox = document.getElementById('password');
const clipboardTag = document.getElementsByClassName('clipBoard')[0];
const btnGenerateTag = document.getElementsByClassName('btnGenerate')[0];
const length = 12;
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const characters = "@#$%^&*()_-=+{[}]\|:;'.?/,!~`";
const allChars = uppercase+lowercase+numbers+characters;
createPasswd = () => {
  let password = "";
  password += uppercase[Math.floor(Math.random()*uppercase.length)];
  password += lowercase[Math.floor(Math.random()*lowercase.length)];
  password += numbers[Math.floor(Math.random()*numbers.length)];
  password += characters[Math.floor(Math.random()*characters.length)];
  while(password.length<length){
    password += allChars[Math.floor(Math.random()*allChars.length)]
  }
  passwordBox.value = password;
}
btnGenerateTag.addEventListener('click',() => {
  createPasswd();
  clipboardTag.classList.remove('fa-solid');
})
clipboardTag.addEventListener('click',()=>{
  clipboardTag.classList.add('fa-solid');
  navigator.clipboard.writeText(passwordBox.value);
})
