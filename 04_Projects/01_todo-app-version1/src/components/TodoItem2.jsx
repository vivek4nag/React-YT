function TodoItem2() {

    let todoName = 'Go to College' ;  
    let todoDate = '4/10/2023' ;  
  
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
  
  export default TodoItem2;
  