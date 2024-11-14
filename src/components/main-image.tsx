import Image from 'next/image'
import main_image from '/public/main_image.svg'

export function MainImageComponent() {
  return (
    <Image
      src={main_image}
      alt='Imagem com uma casa e um carro elétrico sendo carregado'
      className='max-h-[450px] w-full'
    />
  )
}
