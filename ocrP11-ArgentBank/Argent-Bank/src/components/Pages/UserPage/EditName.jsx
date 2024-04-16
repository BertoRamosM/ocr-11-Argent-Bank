import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editProfile } from "../../../features/editUserSlice";
import FormInput from "../SignInPage/FormInput";


function EditUserName({ toggleEditing }) {
  const { firstName, lastName, userName } = useSelector(
    (store) => store.profile
  );

  
  const [newUserName, setNewUserName] = useState(userName);
  const dispatch = useDispatch();

  const handleSave = () => {
    toggleEditing();
    dispatch(editProfile(newUserName));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSave();
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormInput
        className="input-wrapper input-wrapper-edit"
        htmlFor="UserName"
        text="User Name: "
        type="text"
        id="UserName"
        defaultValue={newUserName}
        onChange={(e) => setNewUserName(e.target.value)}
        autoComplete="off"
      />
      <div className="edit-field">
        <FormInput
          className="input-wrapper input-wrapper-edit"
          htmlFor="firstname"
          text="First Name: "
          type="text"
          id="firstname"
          value={firstName}
          disabled={true}
        />

        <FormInput
          className="input-wrapper input-wrapper-edit"
          htmlFor="LastName"
          text="Last Name: "
          type="text"
          id="LastName"
          value={lastName}
          disabled={true}
        />
      </div>

      <button
        className="edit-button"
        type="submit"
        style={{ marginRight: "3rem", width: "6rem", marginLeft: "6rem" }}
      >
        Save
      </button>

      <button
        className="edit-button"
        onClick={toggleEditing}
        style={{ width: "6rem" }}
      >
        Cancel
      </button>
    </form>
  );
}

export default EditUserName;
