import GlobalStylesClient from "../components/GlobalStylesClient";

export const metadata = {
  title: "Amylia Martineau | Portfolio",
  description: "Sleek Neon Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
    <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;700&family=Montserrat+Alternates:wght@400;700&family=Quicksand:wght@400;700&family=DM+Sans:wght@400;700&display=swap" rel="stylesheet" />
    </head>
    <body>
    <GlobalStylesClient />
    {children}
    </body>
    </html>
  );
}
