import reviews from "@/public/js/reviews"
import { CardContent, Card } from "@/components/ui/card";
import {StarIcon} from '@/components/component/Icons'

const Reviews = ({className}) => {
  return (
    <section
    className={`w-full py-12 md:py-24 lg:py-32 flex flex-row min-h-screen justify-center items-center ${className}`}
    id="reviews"
  >
    <div className="container px-4 md:px-6">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">
      Reviews
      </h2>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {reviews.map((testimonial, index) => (
          <Card key={index}>
            <CardContent className="p-6 flex flex-col items-center space-y-2">
              <p className="text-gray-500 dark:text-gray-400">
                {testimonial.comment}
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                - Customer, {testimonial.date}
              </p>
              <div className="flex gap-1">
                <StarIcon className="h-4 w-4 text-yellow-500" />
                <StarIcon className="h-4 w-4 text-yellow-500" />
                <StarIcon className="h-4 w-4 text-yellow-500" />
                <StarIcon className="h-4 w-4 text-yellow-500" />
                <StarIcon className="h-4 w-4 text-yellow-500" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
  )
}

export default Reviews