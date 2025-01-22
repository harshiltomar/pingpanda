import Heading from "./components/heading"
import { MaxWidthWrapper } from "./components/max-width-wrapper"

const Page = () => {
  return (
    <>
      <section className="relative py-24 sm:py-32 bg-brand-25">
        <MaxWidthWrapper className="text-center">
          <div className="relative mx-auto text-center flex flex-col items-center gap-10">
            <div>
              <Heading>
                <span>Real-Time SAAS Insights, </span>
                <br/>
                <span className="relative bg-gradient-to-r from-brand-700 to-brand-800 text-transparent bg-clip-text">Delivered to Your Inbox</span>
              </Heading>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      <section></section>
      <section></section>
      <section></section>
    </>
  )
}

export default Page
