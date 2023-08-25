import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
        Hello and Welcome 💩&nbsp;
        <span className="whitespace-nowrap">
          I'm <span className="font-bold">🎸&nbsp; Playin Monty!</span>
        </span>
      </p>
    </main>
  )
}
