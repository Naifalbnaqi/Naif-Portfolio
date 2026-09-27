import { profile } from "@/content/portfolio";
import { container } from "./ui";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06]">
      <p className={`${container} py-8 text-sm text-slate-400`}>© 2026 {profile.name}</p>
    </footer>
  );
}
