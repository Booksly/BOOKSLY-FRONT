import './Main.css'
import './compopopo/Hot_Place'
import './compopopo/Nav_Login'
import './compopopo/Nav_Logout'
import './compopopo/Promote_Carousel'
import './compopopo/Shortcut'
import { useLocation } from 'react-router-dom';
import Nav_Main from './compopopo/Nav_Main'
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
      <Shortcut/>
      <Hot_Place/>
      <New_Store/>
    </div>
  )
}