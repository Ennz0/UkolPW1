import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar bg-base-200 shadow-sm">
      {/* Dropdown menu - úplně vlevo */}
      <div className="flex-none">
        <div className="dropdown dropdown-hover">
          <div tabIndex={0} role="button" className="btn btn-square btn-ghost">
            {/* Ikona pro dropdown, například hamburger */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </div>
          <ul tabIndex={0} className="dropdown-content menu bg-base-200 rounded-box z-[1] w-64 p-2 shadow-sm -ml-2">
            <li><a>Item 1</a></li>
            <li><a>Item 2</a></li>
          </ul>
        </div>
      </div>

      {/* Název "Sneaker Gallery" - uprostřed */}
      <div className="flex-1 px-4">
        <span className="text-xl font-bold">Sneaker Gallery</span>
      </div>

      {/* Theme controller - úplně vpravo */}
      <div className='px-4 flex-none'>
        <label className="toggle text-base-content">
          <input type="checkbox" value="pastel" className="theme-controller" />
          <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></g></svg>
          <svg aria-label="sun" xmlns="http://www.w30/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></g></svg>
        </label>
      </div>
    </nav>
  );
};

export default Navbar;