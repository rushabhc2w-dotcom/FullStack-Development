import { Search,Bell,ChevronDown } from "lucide-react";

function Header({user,search,setSearch}){
    const initials = user
    .split(" ")
    .filter(Boolean)
    .slice(0,2)
    .map((name)=>name[0]
    .toUpperCase())
    .join("");

    return(
        <header className="dashboard-header">
            <div className="header-search">
                <Search size={19}/>
                <input type="text" placeholder="Search transactions, categories.."
                value={search} onChange={(e)=>setSearch(e.target.value)} />
            </div>

            <div className="header-actions">
                <button aria-label="Notification" className="notification-button" onClick={()=>alert("No new notification")}>
                    <Bell size={21}/>
                    <span className="notification-dot">

                    </span>

                </button>
                <div className="header-separator">

                </div>
                <div className="user-profile">
                    <div className="user-avatar">
                        {initials}
                    </div>
                    <div className="user-details">
                        <h4>{user}</h4>
                        <p>Students</p>
                    </div>
                    <ChevronDown size={16}/>
                </div>
            </div>
        </header>
    )
}


export default Header;