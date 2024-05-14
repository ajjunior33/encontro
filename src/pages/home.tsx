import { Button } from '@/components/ui/button'
import { MessageCircleMore } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
export const Home = () => {

    const navigate = useNavigate();
    return (
        <main className="max-w-[100vw] max-h-[100vh]">
            <article className='pt-10 pb-10 max-w-[800px] flex items-center flex-col mx-auto'>
                <section className="flex items-center justify-center flex-col py-5 px-2">
                    <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight lg:text-5xl">Encontro de Casais</h1>
                    <p className="leading-7 [&:not(:first-child)]:mt-6">
                        Venha participar da conferência para casais na <strong>Igreja de Deus no Brasil em Porto de Santana</strong>. No dia <strong>24 de Agosto</strong>, com um <strong>investimento</strong> de apénsas <strong>R$ 150,00</strong> por casal, podendo ser pago em até 3x no carnê.</p>
                    <Button onClick={() => navigate("/inscricao")} className='mt-3  mb-3'>Faça já sua inscrição</Button>
                </section>
                <section className='p-5 flex gap-2'>
                    <img src='./casal.jpeg' className='rounded-lg' width='300px' />
                    <div>
                        <h3 className="text-center mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
                            Adriani e Mary Capeleti
                        </h3>
                        <p className='max-w-[500px] leading-7 [&:not(:first-child)]:mt-6'>
                            Coordenadores da região de Cariacica, líderes do Casados para Sempre, Pais para toda vida, Psicanalistas, Terapeutas e estudantes de sexologia.
                        </p>
                        <center className='mt-5'>
                            <Button onClick={() => navigate('inscricao')}>Fazer minhas inscrição agora!</Button>

                        </center>
                    </div>
                </section>

                <section className='flex flex-col items-center'>
                    <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
                        Mais Informações
                    </h3>

                    <p className='max-w-[500px] text-center mb-5 leading-7 [&:not(:first-child)]:mt-6'>
                        Para obter mais informações entre em contato conosco através do link abaixo.
                    </p>
                    <div className='flex items-center gap-2'>

                        <Link target='_blank' to="https://wa.me/5527988219532?text=Ol%C3%A1%2C+V%C3%A2nia.+Quero+saber+mais+sobre+a+confer%C3%AAncia+de+casais.">
                            <Button>
                                <MessageCircleMore />
                                Vânia
                            </Button>
                        </Link>
                        <Link to="https://wa.me/5527995263926?text=Ol%C3%A1%2C+L%C3%BAcia.+Quero+saber+mais+sobre+a+confer%C3%AAncia+de+casais." target='_blank'>

                            <Button>
                                <MessageCircleMore />
                                Lúcia
                            </Button>
                        </Link>
                    </div>
                </section>
            </article>
        </main>
    )
}