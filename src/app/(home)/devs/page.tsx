import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import Link from 'next/link'

type DevProp = {
  id: number
  name: string
  rm: number
  turma: string
  github_link: string
  linkedin_link: string
}

export default function DevsPage() {
  const devs_list: DevProp[] = [
    {
      id: 1,
      name: 'Arthur Chacon Garcia Spedine',
      rm: 554489,
      turma: '1TDSPJ',
      github_link: 'https://github.com/arthurspedine',
      linkedin_link: 'https://www.linkedin.com/in/arthurspedine',
    },
    {
      id: 2,
      name: 'Pedro Henrique dos Santos',
      rm: 559064,
      turma: '1TDSPJ',
      github_link: 'https://github.com/Pedro-Henrique3216',
      linkedin_link: 'https://www.linkedin.com/in/pedro-henrique-111978265',
    },
    {
      id: 3,
      name: 'Vinicius de Oliveira Coutinho',
      rm: 556182,
      turma: '1TDSPJ',
      github_link: 'https://github.com/ViniOC',
      linkedin_link:
        'https://www.linkedin.com/in/vinicius-de-oliveira-coutinho',
    },
  ]

  return (
    <div className='py-4'>
      <div className='flex flex-col items-center justify-center flex-grow px-8 space-y-4'>
        {devs_list.map(dev => (
          <div
            key={dev.id}
            className='rounded-xl border bg-card text-card-foreground shadow p-6 space-y-2'
          >
            <div className='flex items-center space-x-2'>
              <Image
                className='min-w-24 h-full rounded-full'
                src={`${dev.github_link}.png`}
                alt={dev.name}
                width={96}
                height={96}
              />
              <div className='flex flex-col'>
                <h2 className='text-lg font-semibold'>{dev.name}</h2>
                <p className='text-sm'>RM: {dev.rm}</p>
                <p className='text-muted-foreground text-sm'>
                  Turma: {dev.turma}
                </p>
              </div>
            </div>
            <div>
              <Link
                href={dev.github_link}
                target='_blank'
                rel='noreferrer'
                className='flex items-center gap-1'
              >
                <GitHubLogoIcon />
                GitHub
              </Link>
              <Link
                href={dev.linkedin_link}
                target='_blank'
                rel='noreferrer'
                className='flex items-center gap-1'
              >
                <LinkedInLogoIcon />
                LinkedIn
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
