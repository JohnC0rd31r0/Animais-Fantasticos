export default function initModal() {
  const containerModal = document.querySelector('[data-modal= "container"]');
  const botaoAbrir = document.querySelector('[data-modal="abrir"]');
  const botaoFechar = document.querySelector('[data-modal="fechar"]');

  if (botaoAbrir && botaoFechar && containerModal) {
    function toggleModal() {
      event.preventDefault();
      containerModal.classList.toggle('ativo');
    }
    function cliqueForaModal() {
      if (event.target === this) toggleModal();
    }

    botaoAbrir.addEventListener('click', toggleModal);
    botaoFechar.addEventListener('click', toggleModal);
    containerModal.addEventListener('click', cliqueForaModal);
  }
}
