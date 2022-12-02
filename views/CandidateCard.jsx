const React = require("react");

module.exports = function CandidateCard({ candidate }) {
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
        Текущий этап: <span></span>
      </h6>
      <h6>История прохождения этапов подбора:</h6>
      <table className="table table-borderless">
        <tr>
          <th>Название этапа</th>
          <th>Дата прохождения</th>
          <th>Время прохождения</th>
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
    </div>
  );
};
