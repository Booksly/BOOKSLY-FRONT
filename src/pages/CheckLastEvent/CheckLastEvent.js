import StoreOwnerLeftNavi from "../nav/StoreOwnerLeftNavi";
import StoreOwnerTopNavi from "../nav/StoreOwnerTopNavi";

export default function CheckLastEvent() {
    return(
        <div className="StoreOwnerMain">
                <div className="StoreOwnerMainBack">
                    <StoreOwnerLeftNavi/>
                    <div className="SOMcontainerAll">
                        <StoreOwnerTopNavi/>
                        <div className="SOMcontainer">
                            
                        </div>  
                    </div>
                </div>
        </div>
    )
}

