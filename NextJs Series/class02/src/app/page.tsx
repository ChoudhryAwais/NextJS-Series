import Link from "next/link"

export default function Home() {
  return (
    <div>
      <ul>
        <Link href="/Home">Home</Link><br/>
        <Link href="/News">News</Link><br/>
        <Link href="/Contact">Contact</Link><br/>
        <Link href="/Property">Property</Link><br/>

      </ul>
    </div>
  );
}
