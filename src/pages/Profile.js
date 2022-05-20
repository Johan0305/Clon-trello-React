import Nav from "../components/dashboard/nav/Nav";
import Avatar from "../components/dashboard/Avatar";
import AboutProfile from "../components/profile/AboutProfile";

const Profile = () =>{
    return(
        <div className="profile">
            <Nav/>
            <div className="profileContainer">
                <header className="profileContainer-header">
                    <Avatar />
                    <h2 className="profileContainer-name">Natalia Dos Santos</h2>
                    <h3 className="profileContainer-userName">@Nat4515</h3>
                </header>
                <AboutProfile />
            </div>
        </div>
    );
};

export default Profile;