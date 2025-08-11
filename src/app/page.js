import Genres from "@/components/Genres/Genres"
import PageBottom from "@/components/Global/PageBottom"
import PageHero from "@/components/Global/PageHero"

export default function Home() {
  return (
    <div>
      <PageHero pageTitle="Genres" />
      <Genres />
      <PageBottom />
    </div>
  )
}
