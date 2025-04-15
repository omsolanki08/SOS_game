import React, { useState } from 'react'

export default function RoomPage() {
    const [roomCode, setRoomCode] = useState('')
    const [createdRoomCode, setCreatedRoomCode] = useState('')
    const [isWaiting, setIsWaiting] = useState(false)

    const handleCreateRoom = () => {
        // In real app, call backend to create room and generate code
        const code = Math.random().toString(36).substring(2, 8).toUpperCase()
        setCreatedRoomCode(code)
        setIsWaiting(true)
    }

    const handleJoinRoom = () => {
        alert(`Joining room ${roomCode}...`)
        // Call backend or navigate to /game/:roomCode
    }

    return (
        <div className="p-6 max-w-xl mx-auto space-y-6">
            <h2 className="text-2xl font-bold text-center">Play with Friends</h2>

            <div className="bg-white p-4 rounded shadow">
                <h3 className="text-lg font-semibold mb-2">Create Room</h3>
                <button
                    onClick={handleCreateRoom}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    Create Room
                </button>

                {isWaiting && (
                    <div className="mt-4">
                        <p>Room Code:</p>
                        <h4 className="text-2xl font-bold text-blue-700">{createdRoomCode}</h4>
                        <p className="text-gray-600">Waiting for opponent to join...</p>
                    </div>
                )}
            </div>

            <div className="bg-white p-4 rounded shadow">
                <h3 className="text-lg font-semibold mb-2">Join Room</h3>
                <input
                    type="text"
                    placeholder="Enter room code"
                    value={roomCode}
                    onChange={(e) => setRoomCode(e.target.value.toUpperCase())}
                    className="border px-3 py-2 w-full rounded mb-2"
                />
                <button
                    onClick={handleJoinRoom}
                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                >
                    Join Room
                </button>
            </div>
        </div>
    )
}
