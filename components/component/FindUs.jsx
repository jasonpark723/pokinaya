import {YoutubeIcon, FacebookIcon, InstagramIcon} from '@/components/component/Icons'
import Link from "next/link";


const FindUs = ({className}) => {
  return (
    <section className={`w-full py-6 md:py-12 lg:py-18 flex flex-row justify-center items-center ${className}`}
    id="contact">
    <div className="container px-4 md:px-6">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">
        Find Us At
      </h2>
      <div className="mt-8 flex justify-center space-x-4">
        <Link
          className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
          href="https://www.yelp.com/biz/poki-naya-garden-grove"
          target="_blank"
        >
          <YoutubeIcon className="h-8 w-8" />
        </Link>
        <Link
          className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
          href="https://www.facebook.com/PokiNaya/"
          target="_blank"
        >
          <FacebookIcon className="h-8 w-8" />
        </Link>
        <Link
          className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
          href="https://www.instagram.com/pokinaya/"
          target="_blank"
        >
          <InstagramIcon className="h-8 w-8" />
        </Link>
      </div>
    </div>
  </section>
  )
}

export default FindUs