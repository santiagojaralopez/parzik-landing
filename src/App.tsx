import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { HomePage } from "./pages/HomePage";
import { LandingPageService } from "./pages/LandingPageService";

function App() {
    return (
        <BrowserRouter>
            <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
                <Toaster position="top-right" />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route
                        path="/landing-pages"
                        element={<LandingPageService />}
                    />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
