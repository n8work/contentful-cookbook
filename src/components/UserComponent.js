export default function UserComponent({ users }) {
  console.log("in uc: ", users);

  return (
    <>
      <ul className="user-list">
        {users.map((user) => {
          return (
            <li key={user.id} className="recipe-card">
              {console.log("User: ", user)}
              Username: {user.fn} {user.ln} <hr />
              Profile Image: <hr />
              <img src={`${user.userpic}`} alt="" />
            </li>
          );
        })}
      </ul>
    </>
  );
}
