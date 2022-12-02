document
  .querySelector('nav')
  .addEventListener('click', async (event) => {
    event.preventDefault();
    let data;

    if (event.target.classList.contains('all-candidates')) data = await fetch(`/api/candidates/all-candidates`)
    if (event.target.classList.contains('new-candidates')) data = await fetch(`/api/candidates/new-candidates`)
    if (event.target.classList.contains('invitation-letters')) data = await fetch(`/api/candidates/invitation-letters`)
    if (event.target.classList.contains('screening-call')) data = await fetch(`/api/candidates/screening-call`)
    if (event.target.classList.contains('video-interview')) data = await fetch(`/api/candidates/video-interview`)
    if (event.target.classList.contains('cv-sent')) data = await fetch(`/api/candidates/cv-sent`)
    if (event.target.classList.contains('interview-scheduled')) data = await fetch(`/api/candidates/interview-scheduled`)
    if (event.target.classList.contains('offers')) data = await fetch(`/api/candidates/offers`)
    if (event.target.classList.contains('hired')) data = await fetch(`/api/candidates/hired`)
    if (event.target.classList.contains('denied')) data = await fetch(`/api/candidates/denied`)

    const cards = await data.text();
    const cardsContainer = document.querySelector('.container');
    cardsContainer.innerHTML = '';
    cardsContainer.insertAdjacentHTML('afterbegin', cards);
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
