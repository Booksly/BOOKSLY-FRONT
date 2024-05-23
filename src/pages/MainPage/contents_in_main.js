import './Main.css'
import './compopopo/Hot_Place'
import './compopopo/Nav_Login'
import './compopopo/Nav_Logout'
import './compopopo/Promote_Carousel'
import './compopopo/Shortcut'
import Nav_Main from './compopopo/Nav_Main'
import Promote_Carousel from './compopopo/Promote_Carousel'
import Shortcut from './compopopo/Shortcut'
import Hot_Place from './compopopo/Hot_Place'
import New_Store from './compopopo/New_Store'

export default function Mainmain() {
  return (
    <div className="main_padding">
      <Nav_Main/>
      <Promote_Carousel/>
      <Shortcut/>
      <Hot_Place/>
      <New_Store/>
    </div>
  )
}