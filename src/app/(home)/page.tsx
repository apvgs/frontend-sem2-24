import { MainImageComponent } from '@/components/main-image'

export default function HomePage() {
  return (
    <div className='flex flex-col h-full pt-4'>
      <MainImageComponent />
      <section className='flex flex-col flex-grow border border-border rounded-3xl px-6 py-8 bg-background'>
        <h1 className='text-primary font-bold text-xl'>SmartConsumo</h1>
        <div className='flex flex-col pt-4 gap-4'>
          <div>
            <h2 className='font-bold text-lg'>Sobre Nós</h2>
            <div className='flex flex-col space-y-1 bg-card shadow-md px-4 py-2 mx-1 rounded-md border border-accent'>
              <p className='text-sm md:text-base'>
                Na <span className='font-bold text-primary'>SmartConsumo</span>,
                sabemos que a energia é essencial para a vida moderna. Nosso
                projeto visa proporcionar um futuro sustentável, movendo-se para
                fontes de energia renovável e promovendo justiça social.
              </p>
            </div>
          </div>
          <div>
            <h2 className='font-bold text-lg'>Nossa Missão</h2>
            <div className='flex flex-col space-y-1 bg-card shadow-md px-4 py-2 mx-1 rounded-md border border-accent'>
              <p className='text-sm md:text-base'>
                Desenvolvemos tecnologias avançadas para otimizar o consumo de
                energia em residências, fornecendo ferramentas que ajudam nossos
                clientes a monitorar e gerenciar seu uso de energia de forma
                eficiente e econômica.
              </p>
            </div>
          </div>
          <div>
            <h2 className='font-bold text-lg'>Nossa Solução</h2>
            <div className='flex flex-col space-y-1 bg-card shadow-md px-4 py-2 mx-1 rounded-md border border-accent'>
              <p className='text-sm md:text-base'>
                <strong>Monitoramento de Consumo:</strong> Ferramentas que
                permitem acompanhar o consumo de energia em tempo real e receber
                dicas para economizar.
              </p>
              <p className='text-sm md:text-base'>
                <strong>Tecnologias Avançadas:</strong> Sistemas inteligentes
                para a gestão energética doméstica.
              </p>
              <p className='text-sm md:text-base'>
                <strong>Educação e Conscientização:</strong> Recursos educativos
                para promover práticas sustentáveis.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
