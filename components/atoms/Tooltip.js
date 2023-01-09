const Tooltip = ({ text, children }) => {
  return (
    <div className="group relative" inert role="tooltip">
      {children}
      <span className="text-xs pointer-events-none select-none absolute bottom-full left-1/2 -translate-x-1/2 w-max max-w-xs rounded bg-neutral-900 px-2 py-1 text-neutral-50 opacity-0 transition before:absolute before:left-1/2 before:top-full before:-translate-x-1/2 before:border-4 before:border-transparent before:border-t-neutral-900 group-hover:opacity-100 group-hover:-translate-y-1/4 delay-100">
        {text}
      </span>
    </div>
  );
};

export default Tooltip;
