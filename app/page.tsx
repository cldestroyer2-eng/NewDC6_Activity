import Link from "next/link";

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">
        Hello, my name is Clarke Murcia
      </h1>

      <p className="mt-2">
        I am a BSIT-3 student who is passionate about technology and
        programming. I have experience in web development, mobile app
        <br />
        development, and game development. I am always looking for new
        challenges and opportunities to improve my skills.
      </p>

      <Link href="/projects" className="mt-4 inline-block underline">
        See my projects
      </Link>
      
    </main>
      
    
  );
}