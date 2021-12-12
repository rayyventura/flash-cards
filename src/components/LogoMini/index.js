import React from 'react'
import logoMini from "../../assets/logo-mini.png"
import "./style.css"

export default function LogoMini({initialize}) {
    return (
        <header className={initialize ? "logo-mini" : "display-none"}>
            <img src={logoMini} alt="" onClick={() => window.location.reload(false)}/>
        </header>
    )
}
