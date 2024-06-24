import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import MainTheme from "./theme/theme";
import { ContextProvider } from "./context/mainContext";
const quickSand = Quicksand({ subsets: ["latin"] });
import { Box } from "@mui/material";
import Background from "./components/common/Background";
export const metadata: Metadata = {
  title: "MBTI test app",
  description: "finding the correct mbti type",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.JSX.Element;
}>) {
  return (
    <html lang="en">
      <body className={quickSand.className}>
        <MainTheme>
          <ContextProvider>
            <Box sx={{ position: 'relative' }}>
              <Background />
              {children}
            </Box>
          </ContextProvider>
        </MainTheme>
      </body>
    </html>
  );
}
