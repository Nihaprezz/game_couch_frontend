import React from "react"

const Footer = () => {
    return (
        <footer>
            <div className="copyright-container">
                @2020 The Game Couch
            </div>

            <div className="bulma-container">
                {/* eslint-disable-next-line*/}
                <a target="_blank"  href="https://bulma.io">
                <img src="https://bulma.io/images/made-with-bulma--dark.png" alt="Made with Bulma" width="128" height="24"/>
                </a>
            </div>

            <div>
                {/* eslint-disable-next-line*/}
                <a className="rawg-text" target="_blank" href="https://rawg.io/apidocs">RAWG API</a>
            </div>


        </footer>
    )
}

export default Footer