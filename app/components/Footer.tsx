export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/6 pt-8 text-slate-400">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-md bg-gradient-to-r from-[#06b6d4] to-[#7c3aed] flex items-center justify-center font-bold">A</div>
          <div>
            <div className="font-semibold text-white">Aurora</div>
            <div className="text-xs text-slate-400">© {new Date().getFullYear()} Aurora Labs</div>
          </div>
        </div>

        <div className="text-sm text-slate-400">
          Made with ❤️ — <a className="underline hover:text-white" href="#">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
