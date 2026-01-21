import React from "react";
import { HashRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import { Search, Github, Twitter, Menu, X, ArrowUpRight } from "lucide-react";
import LandingPage from "./pages/LandingPage";
import ChangelogPage from "./pages/ChangelogPage";
import DocsPage from "./pages/DocsPage";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    // { name: 'Documentation', path: '/docs' },
    { name: "Changelog", path: "/changelog" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-zinc-100 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-10">
          <Link to="/" className="flex items-center group">
            <div className="h-8 w-8 flex items-center justify-center transition-transform group-hover:scale-105">
              <img src="./logo.png" alt="track it " />
            </div>
            <span className="text-sm font-bold tracking-tight text-zinc-900 uppercase">
              TrackIt
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-xs font-bold uppercase tracking-widest transition-colors hover:text-blue-600 ${
                  location.pathname === link.path
                    ? "text-blue-600"
                    : "text-zinc-500"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://apps.shopify.com/trackit-2"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 rounded-md bg-blue-600 px-5 py-2 text-xs font-bold text-white transition-all hover:bg-blue-700 active:scale-95 shadow-sm"
          >
            Install on Shopify <ArrowUpRight size={14} />
          </a>

          <button
            className="md:hidden text-zinc-500"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-zinc-100 bg-white p-6">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-sm font-bold uppercase tracking-widest text-zinc-500 hover:text-blue-600"
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://apps.shopify.com/trackit-2"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-md bg-blue-600 py-3 text-sm font-bold text-white"
            >
              Install App
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = () => (
  <footer className="border-t border-zinc-100 bg-white py-16">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <div className="h-5 w-5 rounded bg-zinc-900 flex items-center justify-center">
              <span className="text-[8px] font-bold text-white uppercase">
                T
              </span>
            </div>
            <span className="text-xs font-bold tracking-tight text-zinc-900 uppercase">
              TrackIt
            </span>
          </div>
          <p className="text-xs text-zinc-500 leading-relaxed max-w-[200px]">
            The standard for precision server-side tracking on Shopify.
          </p>
        </div>
        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-6">
            Resources
          </h4>
          <ul className="space-y-3 text-xs font-medium text-zinc-600">
            {/* <li>
              <Link to="/docs" className="hover:text-blue-600">
                Docs
              </Link>
            </li> */}
            <li>
              <Link to="/changelog" className="hover:text-blue-600">
                Changelog
              </Link>
            </li>
            <li>
              <a
                href="https://apps.shopify.com/trackit-2"
                className="hover:text-blue-600"
              >
                App Store
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-6">
            Compliance
          </h4>
          <ul className="space-y-3 text-xs font-medium text-zinc-600">
            <li>
              <Link to="#" className="hover:text-blue-600">
                GDPR / CCPA
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-blue-600">
                Consent Mode v2
              </Link>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-6">
            Connect
          </h4>
          <div className="flex items-center gap-4 text-zinc-400">
            <a href="#" className="hover:text-zinc-950 transition-colors">
              <Twitter size={18} />
            </a>
            <a href="#" className="hover:text-zinc-950 transition-colors">
              <Github size={18} />
            </a>
          </div>
        </div>
      </div>
      <div className="pt-8 border-t border-zinc-50 text-center md:text-left">
        <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
          © 2024 TrackIt
        </p>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <HashRouter>
      <div className="flex min-h-screen flex-col bg-white">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/changelog" element={<ChangelogPage />} />
            {/* <Route path="/docs" element={<DocsPage />} /> */}
            <Route path="/docs/:topic" element={<DocsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}
