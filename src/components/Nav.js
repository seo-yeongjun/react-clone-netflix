import React, {useEffect, useState} from 'react'
import "./Nav.css"
import {useNavigate} from "react-router";

const Nav = React.memo(()=>{
    const [show, setShow] = useState(false)
    const [searchValue, setSearchValue] = useState("")

    const navigate = useNavigate()

    useEffect(() => window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            setShow(true)
        } else {
            setShow(false);
        }
    }), [show]);

    const handleChange = (e) => {
        setSearchValue(e.target.value)
        navigate(`/search?q=${e.target.value}`)
    }

    return (<nav className={`nav ${show && 'nav-black'}`}>
        <img src="img/logo.png" alt="logo" onClick={() => {
            navigate('/')
        }} className="nav-logo"></img>
        <input
            className="fixed left-1/2 transform -translate-x-1/2 bg-black opacity-60 rounded text-white p-1 border-none"
            placeholder="검색어 입력" type="text" value={searchValue} onChange={handleChange}/>
        <img src="img/profile.png" alt="profile" className="nav-profile"></img>
    </nav>);
})

export default Nav;
