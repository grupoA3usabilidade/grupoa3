if (localStorage.getItem("token") == null) {
  alert("Você precisa estar logado para acessar essa página");
  window.location.href = "./adju/html/login.html";
}
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav ul');

  menuToggle.addEventListener('click', () => {
      nav.classList.toggle('active');
  });
});


const userLogado = JSON.parse(localStorage.getItem("userLogado"));

const logado = document.querySelector("#logado");

function sair() {
  localStorage.removeItem("token");
  localStorage.removeItem("userLogado");
  window.location.href = "./adju/html/login.html";
}

document.addEventListener("DOMContentLoaded", function() {
  const tabs = document.querySelectorAll(".tabs a");
  const tabContent = document.querySelectorAll(".tab-content");

  function showTabContent(event) {
      event.preventDefault();
      const target = document.querySelector(event.target.getAttribute("href"));

      tabContent.forEach(section => section.style.display = "none");
      target.style.display = "block";

      tabs.forEach(tab => tab.classList.remove("active"));
      event.target.classList.add("active");
  }

  tabs.forEach(tab => {
      tab.addEventListener("click", showTabContent);
  });


  tabs[0].click();
});
