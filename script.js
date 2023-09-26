const toggleNavList = document.getElementById("navList");
const navList = document.querySelector("header nav");

toggleNavList.onclick = () => {
  const span = toggleNavList.querySelector("span");

  span.textContent = navList.classList.toggle("hide")
    ? "Abrir Lista de Navegação"
    : "Fechar Lista de Navegação";
};
