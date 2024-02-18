const checkNumberInput = (selector) => {
  const numberInputs = document.querySelectorAll(selector);

  numberInputs.forEach((item) => {
    item.addEventListener("input", () => {
      item.value = item.value.replace(/\D/, "");
    });
  });
};

export default checkNumberInput;
