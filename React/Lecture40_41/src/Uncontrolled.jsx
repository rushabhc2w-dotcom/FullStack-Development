    import { useRef } from "react";
function Uncotrolled(){
  const userRef = useRef();
  const passwordRef = useRef();

  const handleForm = (event) => {
    event.preventDefault();
    const user = document.querySelector("#user").value;
    const password = document.querySelector("#password").value;

    console.log(user, password);
  };

  const handleFormRef = (event) => {
    event.preventDefault()
    const user=userRef.current.value
    const password=passwordRef.current.value
    console.log("handleFormRef",user,password);
  };

  return (
    <>
    <h1>Uncontrolled Component</h1>
      <form action="" method="post" onSubmit={handleForm}></form>
      <input type="text" id="useRef" placeholder="enter user name" />
      <br />
      <br />
      <input type="password" id="passwordRef" placeholder="enter user Password" />
      <br /><br />
      <button>Submit </button>

      <hr />

      <h1>Uncontrolled Component with useref</h1>
      <form action="" method="post" onSubmit={handleForm}></form>
      <input type="text" ref={userRef} id="useRef" placeholder="enter user name" />
      <br />
      <br />
      <input type="password" ref={passwordRef} id="passwordRef" placeholder="enter user Password" />
      <br /><br />
      <button>Submit with ref</button>
    
    
    </>
)
}

export default Uncotrolled