import React, { useState } from 'react'

interface NavbarProps { 
    transparent?: boolean
    focus?: string
}

function Navbar(props: NavbarProps) {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
      <>
        <nav
          className={
            (props.transparent
              ? "top-0 absolute z-50 w-full"
              : "relative bg-white") +
            " flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg"
          }
        >
          <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
              <a
                className="text-base font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase"
                
                href="/"
              >
                팀 칼리스토
              </a>
              <button
                className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                type="button"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <i
                  className={
                    (props.transparent ? "text-white" : "text-gray-800") +
                    " fas fa-bars"
                  }
                ></i>
              </button>
            </div>
            <div
              className={
                "lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none" +
                (navbarOpen ? " block rounded shadow-lg" : " hidden")
              }
              id="example-navbar-warning"
            >
              <ul className="flex flex-col lg:flex-row list-none mr-auto">
                <li className="flex items-center">
                  <a
                    className={
                      (props.transparent
                        ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                        : "text-gray-800 hover:text-gray-600 text-sm") +
                      " px-3 py-4 lg:py-2 flex items-center text-sm uppercase font-bold"
                    }
                    href="/about"
                  >
                  {" "}
                    소개
                  </a>
                </li>
              </ul>
              <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                <li className="flex items-center">
                  <a
                    className={
                      (props.transparent
                        ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                        : "text-gray-800 hover:text-gray-600 text-sm") +
                      " px-3 py-4 lg:py-2 flex items-center text-sm font-bold"
                    }
                    href="https://github.com/callistoteam"
                  >
                    <i
                      className={
                        (props.transparent
                          ? "lg:text-gray-300 text-gray-500"
                          : "text-gray-500") +
                        " fab fa-github text-lg leading-lg "
                      }
                    />
                    <span className="lg:hidden inline-block ml-2">Github</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }

export default Navbar