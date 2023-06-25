import './globals.css'
import Navbar from '@/components/Navbar';
import Footer from '@/components/footer/Footer';
export const metadata = {
  title: "youibble",
  description: "shocase and dicover devoloper projects",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
