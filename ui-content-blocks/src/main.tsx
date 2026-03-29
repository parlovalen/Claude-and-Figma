import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { HeroSection } from "./blocks/HeroSection";

const NAV_ITEMS = [
  { id: "hero-section", label: "Hero Section" },
];

function Sidebar({ collapsed, onToggle }: { collapsed: boolean; onToggle: () => void }) {
  return (
    <nav
      className={`fixed top-0 left-0 h-screen bg-white border-r border-steel-light flex flex-col transition-[width] duration-200 overflow-hidden ${
        collapsed ? "w-10" : "w-52"
      }`}
    >
      {/* Toggle button */}
      <button
        onClick={onToggle}
        title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        className="shrink-0 flex items-center justify-center w-10 h-10 mt-2 self-start text-steel hover:text-navy hover:bg-steel-light/40 transition-colors duration-100"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          {collapsed ? (
            /* chevrons-right */
            <path d="M4 3l5 5-5 5M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          ) : (
            /* chevrons-left */
            <path d="M12 3l-5 5 5 5M8 3l-5 5 5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          )}
        </svg>
      </button>

      {/* Nav content — fades out when collapsed */}
      <div
        className={`flex flex-col pt-4 px-4 transition-opacity duration-150 ${
          collapsed ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <p className="font-barlow font-semibold text-navy text-xs uppercase tracking-widest mb-6 px-2 whitespace-nowrap">
          Content Blocks
        </p>
        <ul className="flex flex-col gap-1">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="block font-barlow text-sm text-steel hover:text-navy hover:bg-steel-light/40 px-2 py-1.5 transition-colors duration-100 whitespace-nowrap"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

function App() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <Sidebar collapsed={collapsed} onToggle={() => setCollapsed((c) => !c)} />
      <div
        className={`transition-[padding-left] duration-200 ${collapsed ? "pl-10" : "pl-52"}`}
      >
        {/* ── Hero Section ── */}
        <div id="hero-section" className="scroll-mt-0">
          <div className="px-6 py-3 bg-white border-b border-steel-light">
            <span className="font-barlow font-semibold text-navy text-xs uppercase tracking-widest">
              Hero Section
            </span>
          </div>
          <HeroSection onSubmit={(v) => console.log("Hero submit:", v)} />
        </div>
      </div>
    </>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
