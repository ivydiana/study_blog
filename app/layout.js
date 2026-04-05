import "./globals.css";

export const metadata = {
  title: "Ivy Ding",
  description: "An elegant editorial personal blog with a sakura-inspired palette."
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  var saved = window.localStorage.getItem("theme");
                  document.documentElement.dataset.theme = saved === "light" ? "light" : "dark";
                } catch (error) {
                  document.documentElement.dataset.theme = "dark";
                }
              })();
            `
          }}
        />
        {children}
      </body>
    </html>
  );
}
