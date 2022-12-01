document
  .querySelector('nav')
  .addEventListener('click', async (event) => {
    if (event.target.classList.contains('new-candidates')) {
      event.preventDefault();
      const data = await fetch(`/api/candidates/new-candidates`);
      const cards = await data.text();

      const cardsContainer = document.querySelector('.container');
      cardsContainer.innerHTML = '';
      cardsContainer.insertAdjacentHTML('afterbegin', cards);
    }
  });
