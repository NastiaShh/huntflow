const React = require('react');

module.exports = function NavBar() {
  return (
    <nav
      className="navbar navbar-dark bg-dark"
      style={{ display: "flex", justifyContent: "space-around" }}
    >
      <a className="navbar-brand p-2" href="/candidates">
        Все кандидаты
      </a>
      <a className="navbar-brand" href="/candidates">
        Новые кандидаты
      </a>
      <a className="navbar-brand p-2" href="/candidates">
        Письмо-приглашение
      </a>
      <a className="navbar-brand p-2" href="/candidates">
        Звонок-скрининг
      </a>
      <a className="navbar-brand" href="/candidates">
        Видеоинтервью
      </a>
      <a className="navbar-brand p-2" href="/candidates">
        Резюме передано
      </a>
      <a className="navbar-brand" href="/candidates">
        Назначено интервью
      </a>
      <a className="navbar-brand p-2" href="/candidates">
        Оффер
      </a>
      <a className="navbar-brand p-2" href="/candidates">
        Вышел на работу
      </a>
      <a className="navbar-brand" href="/candidates">
        Отказ
      </a>
    </nav>
  );
};
