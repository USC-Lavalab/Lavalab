"use client";

import StyledComponentsRegistry from "@/lib/registry";
import "@/lib/vendor/fonts/fonts.css";

import "./main.css";
import "./reset.css";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body>
        <StyledComponentsRegistry>
          <div>
            <main>{children}</main>
          </div>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
};

export default Layout;
