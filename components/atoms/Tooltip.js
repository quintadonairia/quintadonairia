const Tooltip = ({ text, children }) => {
  return (
    <div className="group relative" role="tooltip">
      {children}
      <span className="pointer-events-none absolute bottom-full left-1/2 w-max max-w-xs -translate-x-1/2 rounded-sm bg-stone-900 px-2 py-1 text-xs text-stone-50 opacity-0 transition delay-100 select-none group-hover:-translate-y-1/4 group-hover:opacity-100 before:absolute before:top-full before:left-1/2 before:-translate-x-1/2 before:border-4 before:border-transparent before:border-t-stone-900">
        {text}
      </span>
    </div>
  );
};

export default Tooltip;
