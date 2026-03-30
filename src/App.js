import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "pages/HomePage";
import { ReservationPage } from "pages/ReservationPage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/reservation" element={<ReservationPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
}

export default App;
