import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((state) => state.user.currentUser);
  console.log(user);

  return (
    <div>
      <p>email : {user.email}</p>
    </div>
  );
};

export default Profile;
