import { Header } from "@/components/custom/header"
import { MintCard } from "@/components/custom/mint-card"
import { Footer } from "@/components/custom/footer"

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen items-center justify-start nowrap'>
    <Header />
      <main className="flex flex-col items-center pb-8">
        <div className='flex flex-col items-center justify-center mt-4 mb-4 h-1/2'>
          <MintCard />
        </div>
      </main>
      <div className='flex flex-row items-center justify-start'>
        <Footer />
      </div>
      
    </div>

  )
}
