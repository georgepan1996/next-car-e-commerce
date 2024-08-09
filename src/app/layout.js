import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../../styles/global.scss";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Car shop",
  description: "This is a car shop",
};
import { ProductsProvider } from "@/components/ProductsProvider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ProductsProvider>
        <body>
          <Header />
          <main className="router-view">{children}</main>
          <Footer />
        </body>
      </ProductsProvider>
    </html>
  );
}
