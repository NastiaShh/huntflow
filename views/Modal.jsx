const React = require("react");

function Modal() {
  return (
    <div className="container">
      <button
        type="button"
        className="btn btn-primary js-add-candidate-btn"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Добавить кандидата
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Новый кандидат:
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <span className="close">&times;</span>
              <form
                id="addCandidateForm"
                action="/api/candidates"
                method="POST"
              >
                <p>Загрузите фотографию:</p>
                <input type="text" name="pic" />
                <p>ФИО:</p>
                <input className="form-control" name="name" type="text" />
                <p>Номер телефона:</p>
                <input className="form-control" name="phone" type="text" />
                <p>Email:</p>
                <input className="form-control" name="email" type="text" />
                <p>Телеграм:</p>
                <input className="form-control" name="telegram" type="text" />
                <p>Ссылка на hh:</p>
                <input
                  name="cv"
                  type="text"
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                />
                <button className="btn btn-primary saveBtn" type="submit">
                  Сохранить
                </button>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Выход
              </button>
              {/* <button type="button" className="btn btn-primary">
                Save changes
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
module.exports = Modal;
