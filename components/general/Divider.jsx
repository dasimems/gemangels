const Divider = ({
  text,
  textClassName,
  className,
  rightLineClassName,
  leftLineClassName
}) => {
  return (
    <div className={`flex gap-8 items-center ${className ? className : ""}`}>
      <div
        className={`${leftLineClassName} relative flex-1 hidden h-1 sm:block bg-slate-400 after:absolute after:top-1/2 after:-translate-y-1/2 after:rotate-45 after:w-2 md:after:w-4 after:h-2 md:after:h-4 after:bg-slate-400 after:right-0`}
      />

      <h2
        className={`font-bold text-base md:text-lg text-center w-full sm:w-auto ${textClassName
          ? textClassName
          : ""}`}
      >
        {text}
      </h2>

      <div
        className={`${rightLineClassName} relative flex-1 hidden h-1 sm:block bg-slate-400 after:absolute after:top-1/2 after:-translate-y-1/2 after:rotate-45 after:w-2 md:after:w-4 after:h-2 md:after:h-4 after:bg-slate-400 after:left-0`}
      />
    </div>
  );
};

export default Divider;
