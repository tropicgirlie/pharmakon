type Props = {
  name: string;
  filled?: boolean;
  className?: string;
  style?: React.CSSProperties;
};

export default function MaterialIcon({ name, filled, className, style }: Props) {
  return (
    <span
      aria-hidden
      className={`material-symbols${filled ? " filled" : ""}${className ? ` ${className}` : ""}`}
      style={style}
    >
      {name}
    </span>
  );
}
