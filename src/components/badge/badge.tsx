import "./badge.css";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cn from "classnames";

export function Badge({
  icon,
  label,
  variant,
  className,
}: {
  icon?: IconDefinition;
  label?: string;
  variant?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "localize" + "-badge",
        {
          ["localize" + "-badge-variant-" + variant]: !!variant,
        },
        className
      )}
    >
      {icon && <FontAwesomeIcon icon={icon} />}
      {label && (
        <span
          className={cn({
            ["localize" + "-badge-left-icon"]: icon,
          })}
        >
          {label}
        </span>
      )}
    </div>
  );
}
