document
  .querySelector('nav')
  .addEventListener('click', async (event) => {
    if (event.target.classList.contains('all-candidates')) {
      event.preventDefault();
      const data = await fetch(`/api/candidates/all-candidates`);
      const cards = await data.text();
      
      const cardsContainer = document.querySelector('.container');
      cardsContainer.innerHTML = '';
      cardsContainer.insertAdjacentHTML('afterbegin', cards);
    }

    if (event.target.classList.contains('new-candidates')) {
      event.preventDefault();
      const data = await fetch(`/api/candidates/new-candidates`);
      const cards = await data.text();

      const cardsContainer = document.querySelector('.container');
      cardsContainer.innerHTML = '';
      cardsContainer.insertAdjacentHTML('afterbegin', cards);
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

      const candidateInfoContainer = document.querySelector('.candidate-card');
      candidateInfoContainer.innerHTML = '';
      candidateInfoContainer.insertAdjacentHTML('afterbegin', candidate);
    }
  });
