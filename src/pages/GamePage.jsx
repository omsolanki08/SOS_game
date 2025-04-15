import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import SOSBoard from '../components/SOSBoard'

export default function GamePage() {
    const { mode } = useParams()
    const [searchParams] = useSearchParams()

    const gridSize = parseInt(searchParams.get('grid')) || 5
    const timeLimit = parseInt(searchParams.get('time')) || 30
    const playerColor = searchParams.get('color') || 'blue'
    const difficulty = searchParams.get('difficulty') || 'beginner'

    return (
        <div className="p-4 max-w-5xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">
                SOS Game - {mode === 'local' ? 'Vs Player' : 'Vs Bot'} ({gridSize}x{gridSize})
            </h1>

            <SOSBoard
                gridSize={gridSize}
                playerColors={[playerColor, playerColor === 'blue' ? 'black' : 'blue']}
                timeLimit={timeLimit}
                mode={mode}
                difficulty={difficulty}
            />
        </div>
    )
}
