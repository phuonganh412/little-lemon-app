import "./App.css";
import { Header } from "components/Header";
import { Main } from "components/Main";
import { Footer } from "components/Footer";
import { Reservation } from "components/Reservation";
import { RESERVATION_PATH } from "constants/routes";

function App() {
    if (window.location.pathname === RESERVATION_PATH) {
        return <Reservation />;
    }

    return (
        <div className="App">
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

export default App;
