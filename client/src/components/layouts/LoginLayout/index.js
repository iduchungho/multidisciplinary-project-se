
import "./LoginLayout.css";

function LoginLayout({ children }) {
  return (
    <div className="wrapper">
      <div className="content">
        {children}
      </div>
    </div>
  );
}
export default LoginLayout;