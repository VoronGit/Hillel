import styles from "./Header.module.scss";
import { Link, NavLink } from "react-router-dom";
import AddReactionOutlinedIcon from "@mui/icons-material/AddReactionOutlined";
import PersonIcon from "@mui/icons-material/Person";

interface IHeaderProps {
    callback: () => void
}

const Header = ({callback} :IHeaderProps) => {
    return (
        <header className={styles.headerBody}>
            <div className={styles.headerBodyContainer}>
                <Link to='/'>
                    <AddReactionOutlinedIcon sx={{ width: 50, height: 50 }} />
                </Link>
                <nav>
                    <NavLink
                        to='/users'
                        className={({ isActive }) =>
                            isActive ? styles.active : ""
                        }>
                        Users
                    </NavLink>
                    <NavLink
                        to='/posts'
                        className={({ isActive }) =>
                            isActive ? styles.active : ""
                        }>
                        Posts
                    </NavLink>
                </nav>
                <PersonIcon onClick={callback} sx={{ width: 50, height: 50 }} />
            </div>
        </header>
    );
};

export default Header;
