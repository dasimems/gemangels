import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const LinkComponent = ({
  label,
  path,
  active,
  Icon,
  showIcon,
  className,
  description,
  footer,
  action,
  set,
  unActiveClassName,
  activeClassName,
  iconClassName,
}) => {
  const { pathname } = useRouter();
  const [iconSet, setIconSet] = useState(set || "light");
  const linkRef = useRef(null);

  const setListener = useCallback(() => {
    const linkElement = linkRef.current;

    if (linkElement) {
      linkElement.addEventListener("mouseover", () => {
        setIconSet("bold");
      });
      linkElement.addEventListener("mouseout", () => {
        if (pathname !== path) {
          setIconSet(set || "light");
        }
      });
    }
  }, [set, pathname, path]);

  useEffect(() => {
    setListener();
  }, [setListener]);
  let type = "";

  if (!path || typeof path !== "string") {
    path = "";
  }

  if (
    (path && path.toString().slice(0, 1) === "#") ||
    (action && typeof action === "function")
  ) {
    type = "hash";
  }

  if (!description) {
    description = label;
  }
  if (!iconClassName) {
    iconClassName = "";
  }

  let linkClassName = `group/link inline-flex gap-2 duration-300 ${
    footer
      ? "hover:text-white hover:translate-x-[7px]"
      : pathname !== path && "hover:text-white"
  } font-medium relative ${
    pathname === path && !footer
      ? "text-primary-700"
      : "text-slate-200"
  }`;

  let textClassName=`relative ${footer? "": "after:absolute after:w-0 group-hover/link:after:w-full after:h-[2px] after:left-0 after:bg-primary-700 after:-bottom-[3px] group-hover/link:after:duration-300"} ${pathname === path && !footer?"after:w-full": ""}`


  return (
    <>
      {type === "hash" ? (
        <a
          ref={linkRef}
          aria-label={description}
          href={path.length > 0 ? path : undefined}
          onClick={action || (() => {})}
          className={`${linkClassName} ${className}`}
        >
          {Icon && typeof Icon !== "string" && showIcon && (
            <span>
              <Icon set={pathname === path || active ? "bold" : iconSet} />
            </span>
          )}
          <span className={`${textClassName}`}>{label}</span>
        </a>
      ) : (
        <Link
          ref={linkRef}
          aria-label={description}
          href={path}
          className={`${linkClassName} ${className}`}
        >
          {Icon && typeof Icon !== "string" && showIcon && (
            <span className={iconClassName}>
              <Icon set={pathname === path || active ? "bold" : iconSet} />
            </span>
          )}
          <span className={`${textClassName}`}>{label}</span>
        </Link>
      )}
    </>
  );
};

export default LinkComponent;
