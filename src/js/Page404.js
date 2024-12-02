import React from 'react'
import '../css/page404.css'
import { Link } from 'react-router-dom'
export default function Page404() {
    return (
        <>
            <h1>404 Error Page</h1>
            <section class="error-container-404">
                <span class="four"><span class="screen-reader-text">4</span></span>
                <span class="zero"><span class="screen-reader-text">0</span></span>
                <span class="four"><span class="screen-reader-text">4</span></span>
            </section>
            <div class="link-container">
                <Link target="_blank" href="/" class="more-link">Back To Home</Link>
            </div></>
    )
}
