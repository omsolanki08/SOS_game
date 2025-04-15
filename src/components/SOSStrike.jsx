import React from 'react';

const SOSStrike = ({ variant }) => {
    const getDirStyle = (x) => {
        switch (x) {
            case "horizontal":
                return "w-[80px] -left-1/2";
            case "vertical":
                return "rotate-90 w-[80px] -left-1/2";
            case "diagonalX":
                return "rotate-45 w-[113.14px] -left-[35px]";
            case "diagonalY":
                return "-rotate-45 w-[113.14px] -left-[35px]";
            default:
                return "w-[80px] -left-1/2";
        }
    };

    return (
        <div
            className={`absolute top-1/2 ${getDirStyle(variant)}`}
            style={{ height: 2, backgroundColor: "black" }}
        />
    );
};

export default SOSStrike;
