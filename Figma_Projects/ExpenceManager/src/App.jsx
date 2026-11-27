import { useEffect, useState } from "react";

import Login from "./pages/Login";
import Dashboard from "./pages/DashBoard";
import Sidebar from "./components/SideBar";
import Header from "./components/Header";

import { expenseData } from "./data/expenseData";

import "./styles/Layout.css";

function App() {

  const [user, setUser] = useState(() => {
    return localStorage.getItem("expenseUser") || "";
  });
  const [activePage,setActivePage]=useState("Dashboard");
  const[search,setSearch]=useState("");

  const [expenses,setExpenses]=useState(()=>{
    try{
      const savedExpenses=localStorage.getItem("expenses");
      return savedExpenses?JSON.parse(savedExpenses):expenseData;
    }catch{
      return expenseData;
    }
  });

  useEffect(()=>{
    localStorage.setItem(
      "expenses",JSON.stringify(expenses)
    );
  },[expenses]);

  const handleLogin = (userName, remember) => {

    setUser(userName);
    setActivePage("Dashboard");
    setSearch("");

    if (remember) {
      localStorage.setItem("expenseUser", userName);
    } else {
      localStorage.removeItem("expenseUser");
    }

  };

  const handleLogout = () => {

    setUser("");
    setSearch("");
    setActivePage("Dashboard")

    localStorage.removeItem("expenseUser");

  };
  const handleDelete = (id)=>{
    const confirmDelete = window.confirm("Are you sure you want to delete this transaction?"

    );
    if(confirmDelete){
      setExpenses((previosExpenses)=>
      previosExpenses.filter((expense)=>expense.id !==id));

    }
  };
  const handleEdit = (expense)=>{
    alert(`Editing: ${expense.title}`);
  };

  const renderPage=()=>{
    switch(activePage){
      case "Dashboard":
        return(
          <Dashboard expenses={expenses}
          search={search}
          onEdit={handleEdit}
          onDelete={handleDelete}
          setActivePage={setActivePage}
          />
        );
        case "Add Expense":

        return <h1>Add Expense Page</h1>;

      case "Transactions":

        return <h1>Transactions Page</h1>;

      case "Categories":

        return <h1>Categories Page</h1>;

      case "Settings":

        return <h1>Settings Page</h1>;

      default:

        return <h1>Page Not Found</h1>;
    }
  };
  if(!user){
    return <Login onLogin={handleLogin}/>;
  }


  return (
    <div className="app-layout">
      <Sidebar
      activePage={activePage}
      setActivePage={setActivePage}
      onLogout={handleLogout}
      />

      <main className="main-layout">
        <Header user={user}
        search={search}
        setSearch={setSearch}
        />
        <div className="page-content">
          {renderPage()}
        </div>
      </main>
    </div>
  );
}

export default App;