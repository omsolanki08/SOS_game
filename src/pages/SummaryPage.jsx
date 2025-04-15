import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

export default function SummaryPage() {
    const navigate = useNavigate()
    const location = useLocation()

    // Get scores and winner info from navigation state (or use placeholder)
    const { player1 = 0, player2 = 0 } = location.state || {}
    const winner =
        player1 > player2
            ? 'Player 1 Wins!'
            : player2 > player1
                ? 'Player 2 Wins!'
                : 'It’s a Tie!'

    return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-6 p-6 bg-gray-50">
            <h1 className="text-4xl font-bold text-green-700">Game Over</h1>

            <div className="bg-white shadow rounded p-6 w-full max-w-md text-center space-y-4">
                <h2 className="text-2xl font-semibold">{winner}</h2>
                <p className="text-lg">
                    Player 1: <span className="font-bold">{player1}</span>
                </p>
                <p className="text-lg">
                    Player 2: <span className="font-bold">{player2}</span>
                </p>

                <div className="flex justify-center gap-4 pt-4">
                    <button
                        onClick={() => navigate(-1)}
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                        Play Again
                    </button>
                    <button
                        onClick={() => navigate('/')}
                        className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                    >
                        Back to Home
                    </button>
                </div>
            </div>
        </div>
    )
}
