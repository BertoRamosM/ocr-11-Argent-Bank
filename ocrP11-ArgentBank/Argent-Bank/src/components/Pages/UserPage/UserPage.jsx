import { useSelector } from "react-redux";
import AccountItem from "./AccountItem";
import "./UserPage.css";
import { editProfile, fetchUserProfile } from "../../../features/editUserSlice";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import EditName from "./EditName"

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
  const { firstName, lastName, userName } = useSelector(store => store.profile)

  const [isEditing, setEditing] = useState(false)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUserProfile())
  }, [dispatch])
  
  const toggleEditing = () => {
    setEditing(!isEditing)
  }

  return (
    <main className="main bg-dark-user">
      <div className="header">
        <h1>
          Welcome back
          <br />
          <p>
            {firstName} {lastName}
          </p>
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
