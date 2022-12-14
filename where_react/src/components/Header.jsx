const Header = ({user, setUser}) => {
    return (
        <header>
            <div class = "flex">
            <div class = "left-side">
                <p>wHere</p>
            </div>
            <div class = "right-side">
                {user.name ? 
                <p>Hi, {user.name}! | <a class = "header-link" href="" onClick={(e) => {
                    e.preventDefault();
                    setUser("");
                }}>Logout</a></p>
                : <p><a class = "header-link" href="" onClick={(e) => {
                    e.preventDefault();
                    setUser({"_id":{"$oid":"63735476c45a0c96d278035e"},"name":"cam","email":"cam_va@yahoo.co.uk","__v":{"$numberInt":"0"}});
                }}>Login</a></p>
            }
            </div>
            </div>
        </header>
    )
};

export default Header;