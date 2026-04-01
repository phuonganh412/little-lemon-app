import { Footer } from "components/Footer";
import { Header } from "components/Header";

export function PageLayout({ children }) {
    return (
        <div className="App">
            <Header />
            {children}
            <Footer />
        </div>
    );
}
