import { useActionState } from "react";

export default function App() {
  const handleSubmit = async (previousData, formData) => {
    let name = formData.get("name");
    let password = formData.get("password");
    await new Promise((res) => setTimeout(res, 2000));
    console.log("handleSubmit called", name, password);
    if (name && password) {
      return { message: "Data Submitted", name,password };
    } else {
      return { error: "Failed to submit. Enter proper data",name,password };
    }
  };

  const [data, action, pending] = useActionState(handleSubmit, undefined);
  return (
    <div>
      <h1>useActionState Hook in React Js</h1>
      <form action={action}>
        <input
          type="text"
          defaultValue={data?.name}
          placeholder="Enter name"
          name="name"
        />
        <br />
        <br />
        <input
          type="password"
          defaultValue={data?.password}
          placeholder="Enter Password"
          name="password"
        />
        <br />
        <br />
        <button disabled={pending}>Submit Data</button>
        <br />
        <br />
      </form>
      {data?.error && <span style={{ color: "red" }}>{data?.error}</span>}
      {data?.message && <span style={{ color: "green" }}>{data?.message}</span>}

      <h3>Name : {data?.name}</h3>
      <h3>Password : {data?.password}</h3>
    </div>
  );
}
