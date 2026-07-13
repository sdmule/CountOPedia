function Counter() {
  let count = 0;
  return (
    <div className="row text-white container">
      Counter:{count}
      <button className="btn btn-success m-2">+1</button>
      <button className="btn btn-danger m-2">-1</button>
    </div>
  );
}

export default Counter;
