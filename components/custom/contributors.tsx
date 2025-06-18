import Image from 'next/image'
import Link from 'next/link'
import { fetchContributors } from '~/lib/get-contributors'
import { EvervaultCard, Icon } from '~/components/origin/evervault-card'

export default async function Contributors() {
  const contributors = await fetchContributors('besscroft', 'PicImpact')

  return (
    <div className="flex flex-col space-y-4 h-full flex-1 w-full mx-auto items-center p-2">
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-6 xl:grid-cols-4 xl:gap-8">
        {
          contributors.map((item: any) => {
            return (
              <div
                key={item.login}
                className="select-none border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start w-full mx-auto p-4 relative"
              >
                <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
                <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
                <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
                <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

                <EvervaultCard text={item.avatar_url} />

                <h2 className="dark:text-white text-black mt-4 text-lg font-light">
                  {item.login}
                </h2>
                <Link
                  href={item.html_url}
                  target="_blank"
                >
                  <p className="select-none text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5">
                    Follow
                  </p>
                </Link>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}