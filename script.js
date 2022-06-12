//chosen question title add darken class
//chosen question arrow add flip class
//chosen answer remove hidden class

const questionWrappers = document.querySelectorAll("[data-question-wrapper]");

questionWrappers.forEach((wrapper) => {
  wrapper.addEventListener("click", () => {
    if (wrapper.classList.contains("active")) {
      wrapper.classList.toggle("active");
    } else {
      questionWrappers.forEach((wrapper) => {
        wrapper.classList.remove("active");
      });
      wrapper.classList.add("active");
    }
  });
});
