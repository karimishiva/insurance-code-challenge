import LogoSvg from "components/icons/logo";
import UserIconSvg from "components/icons/UserIcon";
import { userInfo } from "types/types";
import styles from "./navbar.module.scss";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { firstName, lastName } = useSelector((state: { users: userInfo }) => {
    return {
      firstName: state.users.firstName,
      lastName: state.users.lastName,
    };
  });
  return (
    <div className={styles.navbarContainer}>
      <Link to={"/"}>
        <LogoSvg className={styles.logo} />
      </Link>
      <div className={styles.navbarTitle}>
        <h2>سامانه مقایسه و خرید آنلاین بیمه</h2>
      </div>

      <div className={styles.navbarUser}>
        <UserIconSvg className={styles.userIcon} />
        <span>{firstName ? `${firstName} ${lastName}` : "ثبت نام"}</span>
      </div>
    </div>
  );
};
export default Navbar;
