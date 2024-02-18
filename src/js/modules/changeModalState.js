import checkNumberInput from "./checkNumberInput";

const changeModalState = (state) => {
  const windowForm = document.querySelectorAll(".balcon_icons_img"),
    windowWidth = document.querySelectorAll("#width"),
    windowHeight = document.querySelectorAll("#height"),
    windowType = document.querySelectorAll("#view_type"),
    windowProfile = document.querySelectorAll(".checkbox");

  checkNumberInput("#width");
  checkNumberInput("#height");

  const bindActionToElement = (event, elem, prop) => {

    elem.forEach((item, index) => {
        
      item.addEventListener(event, () => {
        switch (item.nodeName) {
          case "SPAN":
            state[prop] = index;
            break;
          case "INPUT":
            if (item.getAttribute("type") === "checkbox") {
              index === 0 ? (state[prop] = "Cold") : (state[prop] = "Warm");
              elem.forEach((box, i) => {
                box.checked = false;

                if (index === i) {
                  box.checked = true;
                }
              });
            } else {
              state[prop] = item.value;
            }
            break;
          case "SELECT":
            state[prop] = item.value;
            break;
        }

        console.log(state)
      });
    });
  };

  bindActionToElement("click", windowForm, "form");
  bindActionToElement("input", windowHeight, "height");
  bindActionToElement("input", windowWidth, "width");
  bindActionToElement("change", windowType, "type");
  bindActionToElement("change", windowProfile, "profile");
};

export default changeModalState;
