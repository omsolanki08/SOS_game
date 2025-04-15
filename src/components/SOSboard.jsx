import React from "react";
import SOSStrike from "./SOSStrike";
import { SOSSlot, SlotDirection } from "@/types/types";

const SOSBoard = ({ gameState, crossed, currentPlayer, onCellPress }) => {

    const getSlotText = (slot) => {
        switch (slot) {
            case SOSSlot.S:
                return "S";
            case SOSSlot.O:
                return "O";
            default:
                return "";
        }
    };

    const getVariant = (dir) => {
        switch (dir) {
            case SlotDirection.DIAGX:
                return "diagonalX";
            case SlotDirection.DIAGY:
                return "diagonalY";
            case SlotDirection.VER:
                return "vertical";
            case SlotDirection.HOR:
                return "horizontal";
            default:
                return undefined;
        }
    };

    return (
        <div className="flex flex-col items-center">
            <div className="aspect-square p-2">
                {gameState.map((row, rowIndex) => (
                    <div key={rowIndex} className="flex flex-row">
                        {row.map((item, itemIndex) => (
                            <div key={itemIndex} className="relative" style={{ width: 40, height: 40 }}>
                                <button
                                    onClick={() => onCellPress(rowIndex, itemIndex)}
                                    className={`aspect-square border w-full h-full flex items-center justify-center`}
                                    style={{ borderColor: currentPlayer.color }}
                                >
                  <span
                      className="text-2xl"
                      style={{ fontFamily: "Tempus-Sans" }}
                  >
                    {getSlotText(item)}
                  </span>
                                </button>

                                {crossed &&
                                    crossed.map((cell, index) => {
                                        if (
                                            cell.cell.x === rowIndex &&
                                            cell.cell.y === itemIndex
                                        ) {
                                            return (
                                                <div
                                                    key={index}
                                                    className="absolute top-0 left-0 w-full h-full flex"
                                                >
                                                    {cell.dirs.map((dir, i) => (
                                                        <SOSStrike key={i} variant={getVariant(dir)} />
                                                    ))}
                                                </div>
                                            );
                                        }
                                        return null;
                                    })}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SOSBoard;
