import Image from 'next/image';

export default function MyProfilePic() {
  return(
    <section className="w-full mx-auto">
      <Image
        src="/images/headshotCropped.jpg"
        width={200}
        height={200}
        alt="Monty W"
        priority={true}
      />
    </section>

  )
}
