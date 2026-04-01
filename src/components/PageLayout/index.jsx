import { Header } from "components/Header";
import { Footer } from "components/Footer";

export function PageLayout({ children }) {
    return (
        <div className="App">
            <Header />
            {children}
            <Footer />
        </div>
    );
}
