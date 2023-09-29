const toggleNavList = document.getElementById("toggleNavList");
const navList = document.querySelector(".navList");

toggleNavList.onclick = () => {
  const span = toggleNavList.querySelector("span");

  span.textContent = navList.classList.toggle("hide")
    ? "Abrir menu de navegação"
    : "Fechar menu de navegação";
};
