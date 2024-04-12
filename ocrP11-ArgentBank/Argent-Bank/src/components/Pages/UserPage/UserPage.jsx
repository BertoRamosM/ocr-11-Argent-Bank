import { useSelector } from "react-redux";
import AccountItem from "./AccountItem";
import "./UserPage.css";
import {  fetchUserProfile } from "../../../features/editUserSlice";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import EditName from "./EditName"
import {useNavigate} from "react-router-dom"

const ListOfAccounts = [
  {
    id: 1,
    title: "Argent Bank Checking (x8349)",
    amount: "$2,082.79",
    description: "Available Balance",
  },
  {
    id: 2,
    title: "Argent Bank Savings (x6712)",
    amount: "$10,928.42",
    description: "Available Balance",
  },
  {
    id:3,
    title: "Argent Bank Credit Card (x8349)",
    amount: "$184.30",
    description: "Current Balance",
  },
];

const UserPage = () => {
  const { firstName, lastName } = useSelector(store => store.profile)
  const navigate = useNavigate()

  const { token } = useSelector((store) => store.auth);
  console.log(token);
  const [isEditing, setEditing] = useState(false)

  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(fetchUserProfile())
  }, [dispatch])
  
  const toggleEditing = () => {
    setEditing(!isEditing)
  }

  //on refresh, if token its available to stay in "/user", otherwise we go "/"
 useEffect(() => {
   const storedToken =
     localStorage.getItem("token") || sessionStorage.getItem("token");
   if (storedToken) {
     dispatch({ type: "auth/login/fulfilled", payload: storedToken });
   } else {
     dispatch(logOut());
     navigate("/");
   }
 }, [dispatch, navigate]);

  return (
    <main className="main bg-dark-user">
      <div className="header">
        <h1>
          Welcome back
          <br />
            {firstName} {lastName}
        </h1>
        {isEditing ? (
          <EditName toggleEditing={toggleEditing} />
        ) : (
          <button className="edit-button" onClick={toggleEditing}>
            Edit Name
          </button>
        )}
      </div>
      <h2 className="sr-only">Accounts</h2>

      {ListOfAccounts.map((item) => (
        <AccountItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          description={item.description}
        />
      ))}
    </main>
  );
};

export default UserPage;
