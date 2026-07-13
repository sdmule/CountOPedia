import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./Layout/header";
import Footer from "./Layout/footer";
import Counter from "./Counter";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-fill">
        <Counter />
      </main>
      <Footer />
    </div>
  </StrictMode>,
);
