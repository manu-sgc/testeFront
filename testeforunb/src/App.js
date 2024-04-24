import React from 'react';
import './styles/App.css';
import Sidebar from './components/Sidebar';
import SearchBar from './components/SearchBar';
import AccessButton from './components/AccessButton';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import QuestionButton from './components/QuestionButton';
import CriarPergunta from './components/CriarPergunta';

function App() {
    return (
        <Router>
            <div>
                <Sidebar />
                <SearchBar />
                <AccessButton />
                <Routes>
                    <Route exact path="/" element={<QuestionButton />} /> 
                    <Route path="/criar-pergunta" element={<CriarPergunta />} /> 
                </Routes>
            </div>
        </Router>
    );
}

export default App;