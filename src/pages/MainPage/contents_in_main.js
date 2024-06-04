import './Main.css'
import './compopopo/Hot_Place'
import './compopopo/Promote_Carousel'
import './compopopo/Shortcut'
import { useLocation } from 'react-router-dom';
import Promote_Carousel from './compopopo/Promote_Carousel'
import Shortcut from './compopopo/Shortcut'
import Hot_Place from './compopopo/Hot_Place'
import New_Store from './compopopo/New_Store'
import LoginAfterMainHeader from '../nav/LoginAfterMainHeader'
import LoginBeforeMainHeader from '../nav/LoginBeforeMainHeader'
import { Outlet } from 'react-router'


export default function Mainmain() {
  const location = useLocation();
  const isLoginRoute = location.pathname === '/login';

  return (
    <div className="main_padding">
      {isLoginRoute ? <LoginAfterMainHeader /> : <LoginBeforeMainHeader />}
      <Outlet />
      <Outlet/>
      <Promote_Carousel/>
      <Hot_Place/>
      <New_Store/>
    </div>
  )
}

// import React, { useState } from 'react';
// import './Main.css';
// import Promote_Carousel from './compopopo/Promote_Carousel';
// import Shortcut from './compopopo/Shortcut';
// import Hot_Place from './compopopo/Hot_Place';
// import New_Store from './compopopo/New_Store';
// import Testnav from '../nav/Testnav';
// import { Outlet, useLocation } from 'react-router-dom';

// export default function Mainmain() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const location = useLocation();

//   return (
//     <div className="main_padding">
//       <Testnav isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
//       <Outlet />
//       <Promote_Carousel />
//       <Shortcut />
//       <Hot_Place />
//       <New_Store />
//     </div>
//   );
// }

