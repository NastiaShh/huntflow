const React = require("react");
const Comments = require('./Comments');

module.exports = function CandidateCard({ candidate }) {
  return (
    <div id={candidate.id} className="candidate-info">
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
        Текущий этап: <span className="current-stage">{candidate.current_stage}</span>
        <span>
            <form id='change-stage' method="put">
              <select name="stage" id="city-select">
                <option value="">-- Изменить этап --</option>
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
              <input type="submit" className="btn btn-success" value="Изменить" />
            </form>
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
          <td>{candidate.createdAt.toLocaleString().slice(0, 10)}</td>
          <td>{candidate.createdAt.toLocaleString().slice(11)}</td>
        </tr>
        {candidate.invitation_letter && (
          <tr>
            <td>Отправлено письмо-приглашение</td>
            <td>{candidate.invitation_letter.toLocaleString().slice(0, 10)}</td>
            <td>{candidate.invitation_letter.toLocaleString().slice(11)}</td>
          </tr>
        )}
        {candidate.screening_call && (
          <tr>
            <td>Назначен звонок-скрининг</td>
            <td>{candidate.screening_call.toLocaleString().slice(0, 10)}</td>
            <td>{candidate.screening_call.toLocaleString().slice(11)}</td>
          </tr>
        )}
        {candidate.video_interview && (
          <tr>
            <td>Назначено видеоинтервью</td>
            <td>{candidate.video_interview.toLocaleString().slice(0, 10)}</td>
            <td>{candidate.video_interview.toLocaleString().slice(11)}</td>
          </tr>
        )}
        {candidate.cv_sent && (
          <tr>
            <td>Резюме передано заказчику</td>
            <td>{candidate.cv_sent.toLocaleString().slice(0, 10)}</td>
            <td>{candidate.cv_sent.toLocaleString().slice(11)}</td>
          </tr>
        )}
        {candidate.interview_scheduled && (
          <tr>
            <td>Назначено интервью с заказчиком</td>
            <td>{candidate.interview_scheduled.toLocaleString().slice(0, 10)}</td>
            <td>{candidate.interview_scheduled.toLocaleString().slice(11)}</td>
          </tr>
        )}
        {candidate.offer && (
          <tr>
            <td>Выставлен оффер</td>
            <td>{candidate.offer.toLocaleString().slice(0, 10)}</td>
            <td>{candidate.offer.toLocaleString().slice(11)}</td>
          </tr>
        )}
        {candidate.hired && (
          <tr>
            <td>Вышел на работу</td>
            <td>{candidate.hired.toLocaleString().slice(0, 10)}</td>
            <td>{candidate.hired.toLocaleString().slice(11)}</td>
          </tr>
        )}
        {candidate.denied && (
          <tr>
            <td>Отказ</td>
            <td>{candidate.denied.toLocaleString().slice(0, 10)}</td>
            <td>{candidate.denied.toLocaleString().slice(11)}</td>
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
