import Link from "next/link";

export default function ButtonLink({ text = "Press", href = "#" }) {
  return (
    <Link className="button-link" href={href}>
      {text}
    </Link>
  );
}
