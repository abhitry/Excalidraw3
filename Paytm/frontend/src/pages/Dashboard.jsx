import { useEffect ,useState} from "react"
import { Appbar } from "../components/Appbar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"
import axios from "axios"

export const Dashboard = () => {
    const [balance,setBalance]=useState("Loading...");
    const [firstname, setFirstname] = useState(null);
    const [lastname, setLastname] = useState(null);
    useEffect(()=>{
        console.log("Dashboard Component Mounted");
  
        const getresponse=async()=>{
            try{
                const token=localStorage.getItem("token");
                if (!token) {
                    alert("Unauthorized access. Please log in again.");
                    return;
                }
                const response=await axios.get("http://localhost:3000/api/v1/user/details",{
                    headers:{Authorization: `Bearer ${token}`,
                    },
                });
                console.log("API Response:", response); 
                if(response && response.data)
                {
                    setBalance(response.data.balance);
                    setFirstname(response.data.user.firstName);
                    setLastname(response.data.user.lastName);
                } 
            }
            catch(error)
            {
                console.error("Axios Error:", error);
                setBalance("Error fetching balance");
            }
        }
        getresponse();

        return () => {
            console.log("Dashboard Component Unmounted");
        };
    },[ ]);
   

    return <div>
        <Appbar label={firstname}/>
        <div className="m-8">
            <p>Name:  {firstname && lastname ? `${firstname} ${lastname}` : "Loading..."}</p>
            <Balance value={isNaN(balance) ? " Loading..." : Number(balance).toFixed(2)} />
            <Users />
        </div>
    </div>
}