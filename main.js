function scrollLoc(event) {
  const elem = event.target;
  const thisValue = elem.innerHTML;

  switch (thisValue) {
      case 'Sobre':
          scrollToElement('sobre-davi', 'smooth', 'center');
          break;
      case 'Serviços':
          scrollToElement('servicos', 'smooth', 'center');
          break;
      case 'Localização':
          scrollToElement('localizacao', 'smooth', 'start');
          break;
      case 'Início':
          scrollToElement('inicio', 'smooth', 'start');
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
