const candidateInfoContainer = document.querySelector('.candidate-card');

document.querySelector('nav').addEventListener('click', async (event) => {
  event.preventDefault();
  if (event.target.classList.contains('navbar-brand')) {
    const { href, classList } = event.target;
    const links = document.querySelectorAll('.navbar-brand');
    links.forEach((link) => {
      if (link.classList.contains('active-link')) link.classList.remove('active-link');
    });
    const data = await fetch(href);
    const cards = await data.text();
    const cardsContainer = document.querySelector('.container');
    cardsContainer.innerHTML = '';
    cardsContainer.insertAdjacentHTML('afterbegin', cards);
    candidateInfoContainer.innerHTML = `
      <div class='main-card'>
        <h1 class='huntflow-title'>Huntflow</h1>
        <h2 class='huntflow-subtitle'>сервис для трекинга кандидатов</h2>
        <img src="/img/Man_and_woman_with_briefcase_shake_hand_generated.jpg" class="background-img" alt="Man and woman"/>
      </div>
    `;
    classList.add('active-link');
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

      document.querySelector('#change-stage-form')
      .addEventListener('submit', async (event) => {
        event.preventDefault();
        const form = event.target;
        const select = document.getElementById('stage-select');
        const stageValue = select.value;
        if (stageValue) {
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
              <td>${currentDate.toLocaleString().slice(1, 11)}</td>
              <td>${currentDate.toLocaleString().slice(12, 17)}</td>
            </tr>
          `;
          const stagesHistoryTable = document.querySelector('#stages-history');
          stagesHistoryTable.insertAdjacentHTML('beforeend', newStageRow);
          form.reset();
        }
      });

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

  // document.querySelector('.btn-close')
  // .addEventListener('click', async (event)=>{
  //   const close = event.target
  //   if(close){

  //   }
  // })
