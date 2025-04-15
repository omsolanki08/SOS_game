import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'
import RoomPage from './pages/RoomPage'
import GameSettingsPage from './pages/GameSettingsPage'
import GamePage from './pages/GamePage'
import ProfilePage from './pages/ProfilePage'
import SummaryPage from './pages/SummaryPage'

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/room" element={<RoomPage />} />
                <Route path="/game-settings" element={<GameSettingsPage />} />
                <Route path="/game/:mode" element={<GamePage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/summary" element={<SummaryPage />} />
            </Routes>
        </Router>
    )
}
