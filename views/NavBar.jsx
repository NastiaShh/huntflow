const React = require('react');

module.exports = function NavBar() {
  return (
    <nav
      className="navbar navbar-dark bg-dark nav"
      style={{ display: "flex", justifyContent: "space-around" }}
    >
      <a className="navbar-brand all-candidates" href="/api/candidates/all-candidates">
        Все кандидаты
      </a>
      <a className="navbar-brand new-candidates" href="/api/candidates/new-candidates">
        Новые кандидаты
      </a>
      <a className="navbar-brand invitation-letters" href="/api/candidates/invitation-letters">
        Письмо-приглашение
      </a>
      <a className="navbar-brand screening-call" href="/api/candidates/screening-call">
        Звонок-скрининг
      </a>
      <a className="navbar-brand video-interview" href="/api/candidates/video-interview">
        Видеоинтервью
      </a>
      <a className="navbar-brand cv-sent" href="/api/candidates/cv-sent">
        Резюме передано
      </a>
      <a className="navbar-brand interview-scheduled" href="/api/candidates/interview-scheduled">
        Назначено интервью
      </a>
      <a className="navbar-brand offers" href="/api/candidates/offers">
        Оффер
      </a>
      <a className="navbar-brand hired" href="/api/candidates/hired">
        Вышел на работу
      </a>
      <a className="navbar-brand denied" href="/api/candidates/denied">
        Отказ
      </a>
    </nav>
  );
};
