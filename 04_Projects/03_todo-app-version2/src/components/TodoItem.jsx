/* eslint-disable react/prop-types */
function TodoItem({todoName, todoDate}) {
  
    return (
      <div className="container">
        <div className="row custom-row">
          <div className="col-6">{todoName}</div>
          <div className="col-4">{todoDate}</div>
          <div className="col-2">
            <button type="button" className="btn btn-danger custom-button">
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default TodoItem;
  