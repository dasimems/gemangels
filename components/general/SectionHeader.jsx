const SectionHeader = ({ title, className }) => {
  return (
    <div>
      <h1
        className={`${className} relative inline-block text-lg font-medium md:text-2xl after:absolute after:bg-primary after:h-[2px] after:top-[60%] after:-translate-x-1/2 after:w-[20px] after:-right-[35px]`}
      >
        {title}
      </h1>
    </div>
  );
};

export default SectionHeader;
