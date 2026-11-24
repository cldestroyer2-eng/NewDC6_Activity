// app/about/page.tsx
export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-16 sm:px-8">
      <section className="max-w-3xl rounded-2xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
          A little about me
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          About
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-600">
          I’m Clarke David Murcia, a BSIT-3 student. I enjoy playing games,
          watching movies, and listening to music. I’m hardworking and dedicated,
          and I’m always willing to learn new things.
        </p>
      </section>
    </main>
  );
}
