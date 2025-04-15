import React, { useState, useEffect } from 'react'

export default function ProfilePage() {
    const [guestId, setGuestId] = useState('')
    const [stats, setStats] = useState({ wins: 0, games: 0 })

    useEffect(() => {
        // Simulate getting guest ID and stats from localStorage or database
        let id = localStorage.getItem('guestId')
        if (!id) {
            id = 'GUEST-' + Math.random().toString(36).substring(2, 8).toUpperCase()
            localStorage.setItem('guestId', id)
        }
        setGuestId(id)

        // Example: Load stats (hardcoded here)
        const savedStats = JSON.parse(localStorage.getItem('sosStats')) || { wins: 0, games: 0 }
        setStats(savedStats)
    }, [])

    return (
        <div className="max-w-md mx-auto p-6 bg-white shadow rounded space-y-4 mt-6">
            <h2 className="text-2xl font-bold text-center">Your Profile</h2>

            <div>
                <p className="font-semibold">Guest ID:</p>
                <p className="text-blue-700 text-lg">{guestId}</p>
            </div>

            <div>
                <p className="font-semibold">Games Played:</p>
                <p>{stats.games}</p>

                <p className="font-semibold mt-2">Wins:</p>
                <p>{stats.wins}</p>
            </div>

            <button className="w-full bg-indigo-600 text-white py-2 mt-4 rounded hover:bg-indigo-700">
                Link Account
            </button>
        </div>
    )
}
