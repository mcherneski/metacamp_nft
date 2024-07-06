import { Header } from "@/components/custom/header"
import { MintCard } from "@/components/custom/mint-card"
import { Footer } from "@/components/custom/footer"

export default function Home() {
  return (
    <>
    <Header />
      <main className="flex min-h-screen flex-col items-center p-8 translate-y-[-40px]">
        <div className='flex flex-col items-center justify-start m-8 h-1/2'>
          <MintCard />
        </div>
      </main>
      <Footer />
    </>

  )
}
