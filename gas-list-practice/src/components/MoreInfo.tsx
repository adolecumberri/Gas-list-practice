//Entrada del bar

import React, { Dispatch, FC, ReactNode, useContext } from "react";




interface IMoreInfo {
    key?: string
    content?: ReactNode,
    hidden: boolean,
    setToolTipContent: Dispatch<React.SetStateAction<any>>,
}

const MoreInfo: FC<IMoreInfo> = ({ children, key = "more-info", content, hidden, setToolTipContent }) => {


    if (hidden) {
        return <></>;
    }

    return (
        <>
            <div
                key={key}
                style={{
                    display: 'block',
                    position: "absolute",
                    boxSizing: "border-box",
                    backgroundColor: "white",
                    color: "#000000",
                    border: "1px solid black",
                    padding: "16px",
                    zIndex: 2,
                    minWidth: `320px`,
                    maxWidth: `320px`,
                    minHeight: `400px`,
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)"
                }}
            >
                <input className="backArrow"
                    style={
                        { top: 0, right: 0, marginTop: 0, marginLeft: 0 }
                    }
                    type="button"
                    value="X"
                    onClick={() => setToolTipContent(undefined)}
                />
                {children}
            </div>
        </>
    );
};

export default MoreInfo;