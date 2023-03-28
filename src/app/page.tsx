import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <Image
          src="skysail-outline-thicc.svg"
          alt="name Logo"
          width={600}
          height={300}
        />
        <p>coming soon</p>
      </div>
    </main>
  )
}
