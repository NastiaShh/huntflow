const React = require('react');

module.exports = function NavBar() {
  return (
    <nav
      className="navbar navbar-dark bg-dark"
      style={{ display: "flex", justifyContent: "space-around" }}
    >
      <a className="navbar-brand all-candidates" href="/api/candidates">
        Все кандидаты
      </a>
      <a className="navbar-brand new-candidates" href="/api/candidates/new-candidates">
        Новые кандидаты
      </a>
      <a className="navbar-brand" href="/api/candidates">
        Письмо-приглашение
      </a>
      <a className="navbar-brand" href="/api/candidates">
        Звонок-скрининг
      </a>
      <a className="navbar-brand" href="/api/candidates">
        Видеоинтервью
      </a>
      <a className="navbar-brand" href="/api/candidates">
        Резюме передано
      </a>
      <a className="navbar-brand" href="/api/candidates">
        Назначено интервью
      </a>
      <a className="navbar-brand" href="/api/candidates">
        Оффер
      </a>
      <a className="navbar-brand" href="/api/candidates">
        Вышел на работу
      </a>
      <a className="navbar-brand" href="/api/candidates">
        Отказ
      </a>
    </nav>
  );
};
