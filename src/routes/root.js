import { Outlet, Link } from "react-router-dom";



/**
 * For more information on how the router works refer to documentation or example:
 * https://reactrouter.com/en/main/start/tutorial#the-root-route
 */
export default function Root() {
  
    return (
      <>
        <div id="sidebar">
          <h1>Reminder APP</h1>
          <nav>
            <ul>
              <li>
                <Link to={`/login`}>Login</Link>
              </li>
              <li>
                <Link to={`/contact`}>Contact Us</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div id="content">
            <Outlet />
        </div>
      </>
    );
  }