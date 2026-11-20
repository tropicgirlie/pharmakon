import type { Metadata, Viewport } from "next";
import { Fraunces, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Shapes from "@/components/Shapes";
import ThresholdGate from "@/components/ThresholdGate";

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const sans = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pharmakon · The Living Archive",
  description:
    "An archive of medicinal plants and the indigenous knowledge that has kept them for millennia. The forest is not a commodity.",
};

// viewport-fit=cover lets content reach under the notch and home indicator so
// the hero video is edge-to-edge on iPhone; env(safe-area-inset-*) protects
// specific chrome. themeColor paints the iOS status bar bone-cream to match.
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#f6efe0",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} antialiased`}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,500,0,0&display=swap"
        />
      </head>
      <body className="min-h-dvh bg-[color:var(--bone)] text-[color:var(--ink)]">
        <Shapes />
        <ThresholdGate />
        {children}
      </body>
    </html>
  );
}
