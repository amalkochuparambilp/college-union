import React from "react"
import './Admin.css'
import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <div>
        <form class="login">
            <h2>Welcome to JINAS UNION</h2>
            <p>Please log in</p>
                <input type="text" placeholder="Union ID" />
                <input type="password" placeholder="Password" />
                <input type="submit" value="Log In" />
                <div class="links">
                     <a href="#">Forgot password</a>
                     <Link to='/'>Back</Link>
                </div>
        </form>
    </div>
  );
}

export default Admin