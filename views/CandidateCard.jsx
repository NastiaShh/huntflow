const React = require("react");
const Comments = require('./Comments');

module.exports = function CandidateCard({ candidate, hideSelect }) {
  return (
    <div id={candidate.id} className="canidate-info">
      <h5>ФИО:</h5>
      <p>{candidate.fullname}</p>
      <h5>Телефон:</h5>
      <p>{candidate.phone}</p>
      <h5>Email:</h5>
      <p>{candidate.email}</p>
      <h5>Телеграм:</h5>
      <p>{candidate.telegram}</p>
      <h5>Резюме:</h5>
      <p>{candidate.cv}</p>
      <h5>Этапы подбора</h5>
      <h6>
        Текущий этап: <span>{candidate.current_stage}</span>
        {hideSelect && (
          <span><a href={`/api/candidates/change-stage`} className="change-stage">Изменить</a></span>
        )}
        <span>
          {hideSelect && (
            <form>
              <select name="stage" id="city-select">
                <option value="">-- Выберите этап --</option>
                {!candidate.invitation_letter && (
                  <option value="invitation_letter">Отправлено письмо-приглашение</option>
                )}
                {!candidate.screening_call && (
                  <option value="screening_call">Назначен звонок-скрининг</option>
                )}
                {!candidate.video_interview && (
                  <option value="video_interview">Назначено видеоинтервью</option>
                )}
                {!candidate.cv_sent && (
                  <option value="cv_sent">Резюме передано заказчику</option>
                )}
                {!candidate.interview_scheduled && (
                  <option value="interview_scheduled">Назначено интервью с заказчиком</option>
                )}
                {!candidate.offer && (
                  <option value="offer">Выставлен оффер</option>
                )}
                {!candidate.hired && (
                  <option value="hired">Вышел на работу</option>
                )}
                {!candidate.denied && (
                  <option value="denied">Отказ</option>
                )}
              </select>
            </form>
          )}
        </span>
      </h6>
      <h6>История прохождения этапов подбора:</h6>
      <table className="table table-borderless">
        <tr>
          <th>Название этапа</th>
          <th>Дата</th>
          <th>Время</th>
        </tr>
        <tr>
          <td>Кандидат добавлен в систему</td>
          <td>{candidate.createdAt.toDateString()}</td>
          <td>{candidate.createdAt.toTimeString().slice(0, 5)}</td>
        </tr>
        {candidate.invitation_letter && (
          <tr>
            <td>Отправлено письмо-приглашение</td>
            <td>{candidate.invitation_letter.toDateString()}</td>
            <td>{candidate.invitation_letter.toTimeString().slice(0, 5)}</td>
          </tr>
        )}
        {candidate.screening_call && (
          <tr>
            <td>Назначен звонок-скрининг</td>
            <td>{candidate.screening_call.toDateString()}</td>
            <td>{candidate.screening_call.toTimeString().slice(0, 5)}</td>
          </tr>
        )}
        {candidate.video_interview && (
          <tr>
            <td>Назначено видеоинтервью</td>
            <td>{candidate.video_interview.toDateString()}</td>
            <td>{candidate.video_interview.toTimeString().slice(0, 5)}</td>
          </tr>
        )}
        {candidate.cv_sent && (
          <tr>
            <td>Резюме передано заказчику</td>
            <td>{candidate.cv_sent.toDateString()}</td>
            <td>{candidate.cv_sent.toTimeString().slice(0, 5)}</td>
          </tr>
        )}
        {candidate.interview_scheduled && (
          <tr>
            <td>Назначено интервью с заказчиком</td>
            <td>{candidate.interview_scheduled.toDateString()}</td>
            <td>{candidate.interview_scheduled.toTimeString().slice(0, 5)}</td>
          </tr>
        )}
        {candidate.offer && (
          <tr>
            <td>Выставлен оффер</td>
            <td>{candidate.offer.toDateString()}</td>
            <td>{candidate.offer.toTimeString().slice(0, 5)}</td>
          </tr>
        )}
        {candidate.hired && (
          <tr>
            <td>Вышел на работу</td>
            <td>{candidate.hired.toDateString()}</td>
            <td>{candidate.hired.toTimeString().slice(0, 5)}</td>
          </tr>
        )}
        {candidate.denied && (
          <tr>
            <td>Отказ</td>
            <td>{candidate.denied.toDateString()}</td>
            <td>{candidate.denied.toTimeString().slice(0, 5)}</td>
          </tr>
        )}
      </table>
      <h5>Комментарии:</h5>
      {candidate.Comments.length > 0 && (
        <Comments comments={candidate.Comments} />
      )}
      <form className="comment-form" >
        <button type="submit" className="btn btn-outline-primary">Добавить</button>
        <input type="text" name="comment" className="form-control" placeholder="Комментарий" />
      </form>
    </div>
  );
};
