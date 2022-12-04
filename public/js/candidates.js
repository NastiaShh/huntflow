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

      document.querySelector('.change-stage-form')
      .addEventListener('submit', async (event) => {
        event.preventDefault();
        const form = event.target;
        const select = document.getElementById('stage-select');
        const stageValue = select.value;
        const stageText = select.options[select.selectedIndex].text;

        const response = await fetch(`/api/candidates/stage/${id}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ stageValue, stageText }),
        });
        const currentDate = await response.text();
        const currentStage = document.querySelector('.current-stage');
        currentStage.innerText = stageText;
        const newStageRow = `
          <tr>
            <td>${stageText}</td>
            <td>${currentDate.toLocaleString().slice(0, 10)}</td>
            <td>${currentDate.toLocaleString().slice(11)}</td>
          </tr>
        `
        const stagesHistoryTable = document.querySelector('#stages-history');
        stagesHistoryTable.insertAdjacentHTML('beforeend', newStageRow);
        form.reset();
      })

      document.querySelector('.comment-form')
      .addEventListener('submit', async (event) => {
        event.preventDefault();
        const form = event.target;
        const comment = form.comment.value;
    
        const response = await fetch(`/api/candidates/${id}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ comment }),
        });
        const commentText = await response.text();
        const newComment = `<li className='new-comment'>${commentText}</li>`
        const commentsList = document.querySelector('.comments-list');
        commentsList.insertAdjacentHTML('beforeend', newComment);
        form.reset();
      });
    }
  });
