function scrollLoc(event) {
  event.preventDefault();  // Previne o comportamento padrão do link
  console.log("evento disparado")
  const elem = event.target;
  const thisValue = elem.innerHTML.trim();

  switch (thisValue) {
    case 'Sobre':
        document.getElementById('sobre-davi').scrollIntoView({ behavior: 'smooth', block: 'center' });
        break;
    case 'Serviços':
        document.getElementById('servicos').scrollIntoView({ behavior: 'smooth', block: 'center' });
        break;
    case 'Localização':
        document.getElementById('localizacao').scrollIntoView({ behavior: 'smooth', block: 'start' });
        break;
    case 'Início':
        document.getElementById('inicio').scrollIntoView({ behavior: 'smooth', block: 'start' });
        break;
  }
}

function scrollToElement(elementId, behavior, block) {
  const element = document.querySelector(`#${elementId}`);
  element.style.scrollBehavior = behavior;
  element.scrollIntoView({ behavior: behavior, block: block });
}

window.addEventListener("scroll", function() {
  const logo = document.getElementById("logotipo");
  const header = document.getElementById("header");
  const logodiv = document.getElementById("logo");
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  header.style.backgroundImage = 'linear-gradient(to bottom, rgba(52,52,52,0.2) 10%,rgba(52,52,52,0.3) 50%,rgba(52,52,52,0.4) 90%)';
  header.style.backdropFilter = "blur(6px)";

  if (window.scrollY <= 100) {
      header.style.backgroundImage = "";
      header.style.backdropFilter = "blur(0px)";
  }
});
