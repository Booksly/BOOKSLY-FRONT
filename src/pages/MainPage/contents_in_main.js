import './Main.css'
import './compopopo/Hot_Place'
import './compopopo/Nav_Login'
import './compopopo/Nav_Logout'
import './compopopo/Promote_Carousel'
import './compopopo/Shortcut'
import Nav_Login from './compopopo/Nav_Login'

export default function Mainmain() {
  return (
    <div className="main_padding">
      <Nav_Login/>
      <div className="promote-carousel-padding">
      </div>
      <div className="shortcut-padding">
      </div>
      <div className="hot-place-padding">
      </div>
      <div className="new-store">
      </div>
    </div>
  )
}