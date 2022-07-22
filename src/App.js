import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [openFeatures, setOpenFeatures] = useState(false);
  const [openCompany, setOpenCompany] = useState(false);

  const handleOpenMenu = () => {
    const navbar = document.querySelector('.navbar');
    const menuButton = document.querySelector('.menu-button');
    navbar.classList.toggle('open');
    if (navbar.classList.contains('open')) {
      menuButton.src =
        'https://raw.githubusercontent.com/JBoundless/intro-section-dropdown/c5bd44fcc496fbc456ae3b354cba6368c64caaaa/images/icon-close-menu.svg';
    } else {
      menuButton.src =
        'https://raw.githubusercontent.com/JBoundless/intro-section-dropdown/c5bd44fcc496fbc456ae3b354cba6368c64caaaa/images/icon-menu.svg';
    }
  };
  return (
    <>
      <header className="p-5 flex items-center justify-between">
        <div className="lg:flex lg:items-start lg:justify-start">
          <img
            src="https://raw.githubusercontent.com/JBoundless/intro-section-dropdown/c5bd44fcc496fbc456ae3b354cba6368c64caaaa/images/logo.svg"
            alt="snap logo"
            className="lg:mr-5"
          />
          <nav className="navbar">
            <div className="lg:mr-10">
              <button
                onClick={() => setOpenFeatures(!openFeatures)}
                className="flex items-center justify-start"
              >
                Features{' '}
                {openFeatures ? (
                  <img
                    src="https://raw.githubusercontent.com/JBoundless/intro-section-dropdown/c5bd44fcc496fbc456ae3b354cba6368c64caaaa/images/icon-arrow-up.svg"
                    className="ml-2"
                  />
                ) : (
                  <img
                    src="https://raw.githubusercontent.com/JBoundless/intro-section-dropdown/c5bd44fcc496fbc456ae3b354cba6368c64caaaa/images/icon-arrow-down.svg"
                    className="ml-2"
                  />
                )}
              </button>
              {openFeatures && (
                <ul className="mt-2 ml-3 lg:ml-0 lg:p-3 lg:shadow">
                  <li className="flex items-center justify-start text-sm mb-2">
                    <img
                      src="https://raw.githubusercontent.com/JBoundless/intro-section-dropdown/c5bd44fcc496fbc456ae3b354cba6368c64caaaa/images/icon-todo.svg"
                      alt="todo-list"
                      className="mr-2"
                    />{' '}
                    Todo List
                  </li>
                  <li className="flex items-center justify-start text-sm mb-2">
                    <img
                      src="https://raw.githubusercontent.com/JBoundless/intro-section-dropdown/c5bd44fcc496fbc456ae3b354cba6368c64caaaa/images/icon-calendar.svg"
                      alt="calendar"
                      className="mr-2"
                    />{' '}
                    Calendar
                  </li>
                  <li className="flex items-center justify-start text-sm mb-2">
                    <img
                      src="https://raw.githubusercontent.com/JBoundless/intro-section-dropdown/c5bd44fcc496fbc456ae3b354cba6368c64caaaa/images/icon-reminders.svg"
                      alt="reminders"
                      className="mr-2"
                    />{' '}
                    Reminders
                  </li>
                  <li className="flex items-center justify-start text-sm mb-2">
                    <img
                      src="https://raw.githubusercontent.com/JBoundless/intro-section-dropdown/c5bd44fcc496fbc456ae3b354cba6368c64caaaa/images/icon-planning.svg"
                      alt="planning"
                      className="mr-2"
                    />{' '}
                    Planning
                  </li>
                </ul>
              )}
            </div>
            <div className="lg:mr-10">
              <button
                onClick={() => setOpenCompany(!openCompany)}
                className="flex items-center justify-start"
              >
                Company{' '}
                {openCompany ? (
                  <img
                    src="https://raw.githubusercontent.com/JBoundless/intro-section-dropdown/c5bd44fcc496fbc456ae3b354cba6368c64caaaa/images/icon-arrow-up.svg"
                    className="ml-2"
                  />
                ) : (
                  <img
                    src="https://raw.githubusercontent.com/JBoundless/intro-section-dropdown/c5bd44fcc496fbc456ae3b354cba6368c64caaaa/images/icon-arrow-down.svg"
                    className="ml-2"
                  />
                )}
              </button>
              {openCompany && (
                <ul className="mt-2 ml-3 lg:ml-0 lg:p-3 lg:shadow">
                  <li className="flex items-center justify-start text-sm mb-2">
                    History
                  </li>
                  <li className="flex items-center justify-start text-sm mb-2">
                    Our Team
                  </li>
                  <li className="flex items-center justify-start text-sm mb-2">
                    Blog
                  </li>
                </ul>
              )}
            </div>
            <div className="mb-2 lg:mb-0 lg:mr-10">
              <button>Careers</button>
            </div>
            <div>
              <button>About</button>
            </div>
          </nav>
        </div>
        <div className="lg:hidden">
          <button onClick={handleOpenMenu}>
            <img
              src="https://raw.githubusercontent.com/JBoundless/intro-section-dropdown/c5bd44fcc496fbc456ae3b354cba6368c64caaaa/images/icon-menu.svg"
              alt="hamburger"
              className="menu-button"
            />
          </button>
        </div>
        <div className="hidden lg:block lg:mr-10">
          <button className="mr-10 opacity-75">Login</button>
          <button className="border-2 border-black opacity-75 px-6 py-2 rounded-2xl">
            Register
          </button>
        </div>
      </header>
      <section className="flex flex-col-reverse py-20 md:grid md:gap-10 md:grid-cols-2 md:place-items-center max-w-4xl lg:max-w-5xl md:mx-auto">
        <article className="text-center md:text-left px-5 xl:px-0 mt-10 md:mt-0">
          <h1 className="font-bold text-4xl lg:text-6xl xl:text-7xl mb-5">
            Make remote work
          </h1>
          <p className="mb-5">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <button className="bg-black rounded-lg shadow text-white font-bold hover:opacity-0.75 transition-all duration-150 py-2 px-6 pt-3 pb-2 cursor-pointer">
            Learn more
          </button>
          <ul className="grid grid-cols-4 gap-1 mt-10 place-items-center">
            <li>
              <img
                src="https://raw.githubusercontent.com/JBoundless/intro-section-dropdown/c5bd44fcc496fbc456ae3b354cba6368c64caaaa/images/client-databiz.svg"
                alt="databiz"
                className="w-16 md:w-24"
              />
            </li>
            <li>
              <img
                src="https://raw.githubusercontent.com/JBoundless/intro-section-dropdown/c5bd44fcc496fbc456ae3b354cba6368c64caaaa/images/client-audiophile.svg"
                alt="audiophile"
                className="w-16 md:w-24"
              />
            </li>
            <li>
              <img
                src="https://raw.githubusercontent.com/JBoundless/intro-section-dropdown/c5bd44fcc496fbc456ae3b354cba6368c64caaaa/images/client-meet.svg"
                alt="meet"
                className="w-16 md:w-24"
              />
            </li>
            <li>
              <img
                src="https://raw.githubusercontent.com/JBoundless/intro-section-dropdown/c5bd44fcc496fbc456ae3b354cba6368c64caaaa/images/client-maker.svg"
                alt="maker"
                className="w-16 md:w-24"
              />
            </li>
          </ul>
        </article>
        <article className="">
          <picture>
            <source
              media="(min-width: 768px)"
              srcSet="https://raw.githubusercontent.com/JBoundless/intro-section-dropdown/main/images/image-hero-desktop.png"
            />
            <img
              src="https://raw.githubusercontent.com/JBoundless/intro-section-dropdown/main/images/image-hero-mobile.png"
              alt=""
              className="w-full"
            />
          </picture>
        </article>
      </section>

      <div className="attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by <a href="https://github.com/JBoundless">Jordan Pagkalinawan</a>.
      </div>
    </>
  );
}
