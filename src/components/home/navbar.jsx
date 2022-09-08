import { useLinkClickHandler, useLocation } from "react-router-dom";
import { Navbar } from "flowbite-react";


function navbar() {
    return (
        <Navbar fluid={true} rounded={true}>
            <Navbar.Brand href="https://flowbite.com/">
                <img
                    src="https://flowbite.com/docs/images/logo.svg"
                    className="mr-3 h-6 sm:h-9"
                    alt="Flowbite Logo" />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    SG
                </span>
            </Navbar.Brand>
            <Navbar.Toggle/>
            <Navbar.Collapse>
                <AppNavLink to="/" text="Home"/>
                <AppNavLink to="/tentang" text="Tentang"/>
            </Navbar.Collapse>
        </Navbar>
    )
}

function AppNavLink(props){
    const location = useLocation();
    const clickHandler = useLinkClickHandler(props.to);

    return <span onClick={clickHandler}>
        <Navbar.Link href="{props.to}" active={location.pathname === props.to}>
            {props.text}
        </Navbar.Link>
    </span>
}

export default navbar;