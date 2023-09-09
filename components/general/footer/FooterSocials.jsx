import { socialList } from "@/utils/general";

const FooterSocials = ({className, linkClassName}) => {
  return (
    <ul className={`${className} flex flex-wrap items-center gap-5 text--slate-200`}>
      {socialList.map(({ link, Icon, name }, index) => (
        <li key={index} className="text-lg md:text-xl">
          <a
            title={`Follow me on ${name}`}
            href={link}
            aria-label={`Follow me on ${name}`}
            target="_blank"
            rel="norefferer"
            className={`${linkClassName} inline-flex hover:text-primary-lighter hover:-translate-y-[-5px] duration-300`}
          >
            {Icon && typeof Icon !== "string" && <Icon />}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default FooterSocials;
