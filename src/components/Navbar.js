import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleBackClick = () => {
        navigate('/');
        dispatch(clearCompanyProfile());
    };

    return (
        <nav className="nav-bar">
        <Link to="/" onClick={handleBackClick} className="nav-link">
          <IoMdArrowRoundBack />
        </Link>
        <div className="links-container">
          <Link to="/" className="nav-link">
            <BsFillMicFill />
          </Link>
          <Link to="/" className="nav-link">
            <AiOutlineSetting />
          </Link>
        </div>
      </nav>
    );
}

export default NavBar;