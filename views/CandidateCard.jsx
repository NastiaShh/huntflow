const React = require("react");

module.exports = function CandidateCard({ candidate, stages }) {
  return (
    <div id={candidate.id}>
      <div>
        <h5>ФИО:</h5><p>{candidate.fullname}</p>
        <h5>Телефон:</h5><p>{candidate.phone}</p>
        <h5>Email:</h5><p>{candidate.email}</p>
        <h5>Телеграм:</h5><p>{candidate.telegram}</p>
        <h5>Резюме:</h5><p>{candidate.cv}</p>
        <h5>Этапы подбора</h5>
          <h6>Текущий этап:</h6><p></p>
          <form>
            
          </form>
          <h6>История прохождения этапов подбора:</h6>
          <table className="table table-borderless">
            <tr>
              <th>Название этапа</th>
              <th>Дата прохождения</th>
              <th>Время прохождения</th>
            </tr>
            {/* {stages.map((stage) => {
              <tr>
                <td>{stage.name}</td>
                <td>{stage.date}</td>
              </tr>
            })} */}
            {stages.invitation_letter && (
              <tr>
              <td>Отправлено письмо-приглашение</td>
              <td>{stages.invitation_letter.toDateString()}</td>
              <td>{stages.invitation_letter.toTimeString().slice(0, 5)}</td>
            </tr>
            )}
            {stages.screening_call && (
              <tr>
              <td>Назначен звонок-скрининг</td>
              <td>{stages.screening_call.toDateString()}</td>
              <td>{stages.screening_call.toDateString().slice(0, 5)}</td>
            </tr>
            )}
            {stages.video_interview && (
              <tr>
              <td>Назначено видеоинтервью</td>
              <td>{stages.video_interview.toDateString()}</td>
              <td>{stages.video_interview.toDateString().slice(0, 5)}</td>
            </tr>
            )}
            {stages.cv_sent && (
              <tr>
              <td>Резюме передано заказчику</td>
              <td>{stages.cv_sent.toDateString()}</td>
              <td>{stages.cv_sent.toDateString().slice(0, 5)}</td>
            </tr>
            )}
            {stages.interview_scheduled && (
              <tr>
              <td>Назначено интервью с заказчиком</td>
              <td>{stages.interview_scheduled.toDateString()}</td>
              <td>{stages.interview_scheduled.toDateString().slice(0, 5)}</td>
            </tr>
            )}
            {stages.offer && (
              <tr>
              <td>Выставлен оффер</td>
              <td>{stages.offer.toDateString()}</td>
              <td>{stages.offer.toDateString().slice(0, 5)}</td>
            </tr>
            )}
            {stages.hired && (
              <tr>
              <td>Вышел на работу</td>
              <td>{stages.hired.toDateString()}</td>
              <td>{stages.hired.toDateString().slice(0, 5)}</td>
            </tr>
            )}
            {stages.denied && (
              <tr>
              <td>Отказ</td>
              <td>{stages.denied.toDateString()}</td>
              <td>{stages.denied.toDateString().slice(0, 5)}</td>
            </tr>
            )}            
          </table>
      </div>
    </div>
  );
}
