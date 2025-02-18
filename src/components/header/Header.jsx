import { NavLink } from 'react-router-dom'
import classes from "./Header.module.scss"

const Header = () => {

    const links = [
        {
            label: "Create User",
            to: "/",
        },
        {
            label: "Users",
            to: "/users",
        },
        {
            label: "Products",
            to: "/products",
        },
    ]

    return (
        <header className={classes.header}>
            {
                links.map((link, key) => <NavLink key={key} to={link.to}>{link.label}</NavLink>)
            }
        </header>
    )
}

export default Header
