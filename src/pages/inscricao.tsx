import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { useForm, Controller } from 'react-hook-form'
export const Inscricao = () => {
  const { register, handleSubmit, control } = useForm()

  function formatNumberPhone(phone: string) {
    // Remove todos os caracteres não numéricos
    const cleaned = ('' + phone).replace(/\D/g, '');
    // Aplica a máscara (xx) xxxx-xxxx
    const match = cleaned.match(/^(\d{2})(\d{4,5})(\d{4})$/);
    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
    return phone;
  }
  return (
    <main className="flex h-[100vh] flex-1 items-center justify-center flex-col">
      <p className="scroll-m-20 text-4xl font-extrabold tracking-tight max-w-3xl text-center lg:text-5xl">
        Faça aqui sua inscrição para o encontro de casais na IDBPS</p>
      <form action="" className="max-w-[500px] w-full p-5 flex items-center justify-center flex-col">
        <div className="w-full">
          <Label>Ela</Label>
          <Input placeholder="Nome da Esposa" />
        </div>
        <div className="w-full">
          <Label>Ele</Label>
          <Input placeholder="Nome do Marido" />
        </div>
        <div className="w-full">
          <Label>Email</Label>
          <Input placeholder="seumelhor@email.com" />
        </div>
        <div className="w-full">
          <Label>Telefone</Label>
          <Controller
            name="phone"
            control={control}
            defaultValue=""
            render={({ field }) => ( <Input {...field} type="text" maxLength={15} 
            onChange={(e) => {
              field.onChange(formatNumberPhone(e.target.value));
            }}
            placeholder="27 9 9999 9999" />)}
          />
        </div>
        <div className="w-full mt-3">
          <Label>Modo de pagamento</Label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Dinheiro/PIX" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pix">PIX</SelectItem>
              <SelectItem value="cash">Dinheiro</SelectItem>
              <SelectItem value="carne">Carnê</SelectItem>
            </SelectContent>
          </Select>

        </div>

        <div className="w-full mt-3">
          <Label>Parcelamento</Label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Quantidade de parcelas" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">A vista</SelectItem>
              <SelectItem value="2">2x</SelectItem>
              <SelectItem value="3">3x</SelectItem>
            </SelectContent>
          </Select>

        </div>
        <Button className="mt-3">Fazer minha inscrição</Button>
      </form>
    </main>
  )
}