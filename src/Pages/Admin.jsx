import React from "react"
import './Admin.css'

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
                     <a href="#"></a>
                </div>
        </form>
    </div>
  );
}

export default Admin