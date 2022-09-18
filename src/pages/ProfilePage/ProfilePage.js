import { Link } from "react-router-dom";
import { useAuth } from "../../providers/AuthProvider";
import "./profile.css";

const ProfilePage = () => {
  const auth = useAuth();
  return (
    <main className="profileContainer">
      <section className="profileCenter">
        {auth ? (
          <>
            <section className="ProfileInfo">
              <h3>Account Details:</h3>
              <div>
                <p>Name : {auth.name}</p>
                <p>Email : {auth.email}</p>
                <p>Phone : {auth.phoneNumber}</p>
              </div>
            </section>
            <section className="ProfileImg">
              <h3>Profile Image:</h3>
              <div className="imgBox">
                <img
                  src={require("../../assets/images/user.png")}
                  alt="profileImage"
                />
              </div>
            </section>
          </>
        ) : (
          <Link to={"/signin"}>please login to your account!</Link>
        )}
      </section>
    </main>
  );
};

export default ProfilePage;
