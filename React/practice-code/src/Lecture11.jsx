function ToDo() {
  function callFun() {
    alert("Function Called");
  }

  return (
    <div>
      <h1>Rushabh Anil Pawar</h1>
      <img
        src="https://res.klook.com/image/upload/w_750,h_469,c_fill,q_85/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/xarrqb6zo9bdtc5jyzxx.jpg"
        alt="Rushabh"
        class="photo"
      />

      <ul>
        <li>Invent new traffic lights</li>
        <li>Rehearse a movie scene</li>
        <li>Improve the spectrum technology</li>
      </ul>

      <button onClick={callFun}>Click Me</button>
    </div>
  );
  
}


export default ToDo