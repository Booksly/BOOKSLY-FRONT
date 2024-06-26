import "./StoreRegistNav.css";
import home from "../../assets/home_button.png";
import { useNavigate } from "react-router-dom";

export default function StoreRegistNav() {
    const navigate = useNavigate();
    const goToStoreSearchPage = () => {
        navigate("/StoreSearch");
    };
    const goToMainHomePage = () => {
        navigate("/StoreOwnerMain");
    };
    return (
        <div className="StoreRegistNav">
            <div className="StoreRegistNavBack">
                <div className="StoreRegistNavheader-inner-before">
                    <div className="StoreRegistNavheader-inner-left">
                        <button className="frame-MainHomeButton" onClick={goToMainHomePage}>
                            <div className="StoreRegistNavlogo-goto-home">
                                <div className="StoreRegistNavbooksly-logo"></div>
                            </div>
                        </button>
                    </div>
                    <div className="StoreRegistNavheader-inner-right">
                        <button className="frame-MainHomeButton" onClick={goToMainHomePage}>
                            <div className="StoreRegistNavheaderRightDiv">
                                <div className="StoreRegistNavicon">
                                    <img className="StoreRegistNavhome" src={home} alt={""} />
                                </div>
                                <div className="StoreRegistNavgo-mypage">
                                    <div className="StoreRegistNavmy-page">Home</div>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
