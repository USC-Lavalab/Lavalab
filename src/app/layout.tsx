"use client";

import "./main.css";
import "./reset.css";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body>
        <div>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
};

export default Layout;
