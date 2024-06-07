import React from 'react';

const Nav = () => {
  return (
    <div className='nav-bar'>
           <div className="filter">
                <p className="input">All Products</p>
                <p className="input">Deafault</p>
                <p className="enquiry">Enquiry<br/>9378624279</p>
           </div>
           <div className="iconss">
                <div className="iconn icc">
                <i class="fa-solid fa-indian-rupee-sign"></i>
                </div>
                <div className="iconn icc">
                <i class="fa-solid fa-magnifying-glass"></i>
                </div>
                <div className="iconn icc">
                <i class="fa-solid fa-user"></i>
                </div>
                <div className="setup icc">Quick Setup</div>
           </div>
    </div>
  );
};

export default Nav;
