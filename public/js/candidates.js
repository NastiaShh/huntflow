const candidateInfoContainer = document.querySelector('.candidate-card');

document.querySelector('nav').addEventListener('click', async (event) => {
  event.preventDefault();
  if (event.target.classList.contains('navbar-brand')) {
    const { href } = event.target;
    const data = await fetch(href);
    const cards = await data.text();
    const cardsContainer = document.querySelector('.container');
    cardsContainer.innerHTML = '';
    cardsContainer.insertAdjacentHTML('afterbegin', cards);
    candidateInfoContainer.innerHTML = '';
  }
});

document
  .querySelector('.card-list')
  .addEventListener('click', async (event) => {
    if (event.target.classList.contains('btn-info')) {
      event.preventDefault();
      const moreInfoButton = event.target;
      const candidateCard = moreInfoButton.closest('.card');
      const id = Number(candidateCard.id);

      const data = await fetch(`/api/candidates/${id}`);
      const candidate = await data.text();

      candidateInfoContainer.innerHTML = '';
      candidateInfoContainer.insertAdjacentHTML('afterbegin', candidate);
    }
  });
