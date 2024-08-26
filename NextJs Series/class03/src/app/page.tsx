
import Link from "next/link";

export default function Home() {
  return (
    <ul>
      <Link href="/Home">Home</Link><br />
      <Link href="/News">News</Link><br />
    </ul>
  );
}
