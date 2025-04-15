import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function HomePage() {
    const navigate = useNavigate()

    return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-gray-100">
            <h1 className="text-4xl font-bold text-blue-700">SOS Game</h1>

            <button
                onClick={() => navigate('/room')}
                className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
            >
                Play with Friends
            </button>

            <button
                onClick={() => navigate('/game-settings')}
                className="px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition"
            >
                Play Now
            </button>
        </div>
    )
}
