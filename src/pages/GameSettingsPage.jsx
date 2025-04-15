import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function GameSettingsPage() {
    const navigate = useNavigate()

    const [gridSize, setGridSize] = useState(5)
    const [mode, setMode] = useState('bot') // 'bot' or 'local'
    const [difficulty, setDifficulty] = useState('beginner')
    const [timeLimit, setTimeLimit] = useState(30)
    const [playerColor, setPlayerColor] = useState('blue')

    const handleStart = () => {
        const query = new URLSearchParams({
            grid: gridSize,
            mode,
            time: timeLimit,
            color: playerColor,
            difficulty: difficulty,
        }).toString()

        navigate(`/game/${mode}?${query}`)
    }

    return (
        <div className="p-6 max-w-xl mx-auto space-y-6">
            <h2 className="text-2xl font-bold text-center">Game Settings</h2>

            <div>
                <label className="block font-semibold">Grid Size:</label>
                <select
                    value={gridSize}
                    onChange={(e) => setGridSize(parseInt(e.target.value))}
                    className="w-full border px-2 py-1 rounded"
                >
                    <option value={3}>Small (3x3)</option>
                    <option value={5}>Medium (5x5)</option>
                    <option value={9}>Large (9x9)</option>
                </select>
            </div>

            <div>
                <label className="block font-semibold">Game Mode:</label>
                <select
                    value={mode}
                    onChange={(e) => setMode(e.target.value)}
                    className="w-full border px-2 py-1 rounded"
                >
                    <option value="bot">Vs Bot</option>
                    <option value="local">Vs Player (Offline)</option>
                </select>
            </div>

            {mode === 'bot' && (
                <div>
                    <label className="block font-semibold">Bot Difficulty:</label>
                    <select
                        value={difficulty}
                        onChange={(e) => setDifficulty(e.target.value)}
                        className="w-full border px-2 py-1 rounded"
                    >
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="advanced">Advanced</option>
                    </select>
                </div>
            )}

            <div>
                <label className="block font-semibold">Time Limit (seconds):</label>
                <input
                    type="number"
                    min="5"
                    value={timeLimit}
                    onChange={(e) => setTimeLimit(parseInt(e.target.value))}
                    className="w-full border px-2 py-1 rounded"
                />
            </div>

            <div>
                <label className="block font-semibold">Player Color:</label>
                <select
                    value={playerColor}
                    onChange={(e) => setPlayerColor(e.target.value)}
                    className="w-full border px-2 py-1 rounded"
                >
                    <option value="blue">Blue</option>
                    <option value="black">Black</option>
                </select>
            </div>

            <button
                onClick={handleStart}
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
                Start Game
            </button>
        </div>
    )
}
