//form
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const msgtxt = document.querySelector("#msg");
const sendBtn = document.querySelector(".send");
const clearBtn = document.querySelector(".clear");
const popup = document.querySelector(".popup");

const showError = (input, msg) => {
  //argument INPUT przechowuje nasze INPUTy
  //argument MSG przechowuje placeholder z inputa (el.placeholder)

  const formBox = input.parentElement;
  const errorMsg = formBox.querySelector(".error-text");

  formBox.classList.add("error");
  errorMsg.textContent = msg;
};

const clearError = (input) => {
  const formBox = input.parentElement;
  formBox.classList.remove("error");
};

const checkForm = (input) => {
  //na tablicy pracujemy z petlami

  input.forEach((el) => {
    if (el.value === "") {
      showError(el, el.placeholder);
    } else {
      clearError(el);
    }
  });
};

//argument INPUT z funkcja 'checkform" przechowuje tablice z naszymi inputami
//argument EL odnosi sie do kazdej zmiennej, ktora umiescilismy w tablicy

const checkMail = (email) => {
  const regEx =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (regEx.test(email.value)) {
    clearError(email);
  } else {
    showError(email, "E-mail jest niepoprawny");
  }
};

const checkErrors = () => {
  const allInputs = document.querySelectorAll(".form-box");
  let errorCount = 0;

  allInputs.forEach((el) => {
    if (el.classList.contains("error")) {
      errorCount++;
    }
  });

  if (errorCount === 0) {
    popup.classList.add("show-popup");
  }
  console.log(errorCount);
};

sendBtn.addEventListener("click", (e) => {
  e.preventDefault();

  checkForm([username, email, msgtxt]);
  checkLength(username, 4);
  checkLength(pass, 8);
  /* checkPass(pass, pass2); */
  checkMail(email);
  checkErrors();
});

clearBtn.addEventListener("click", (e) => {
  e.preventDefault(); //nieprzeladowywuje strony z defaultu bo jest event subtmit

  const inputs = [username, email, msgtxt];
  inputs.forEach((el) => {
    el.value = "";
    clearError(el);
  });

  //tez tak mozna,ale jest to niepotrzebne powstarzanie
  //   username.value = ''
  //   pass.value = ''
  //   pass2.value = ''
  //   email.value = ''
});
