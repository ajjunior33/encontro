import { useMutation } from "react-query";
import axios from 'axios';
import { NewCadastro } from "@/pages/inscricao";

export const useCreateCadastro = () => {
    return useMutation({
        mutationKey: 'handle-create-cadastro',
        mutationFn: async (data: NewCadastro) => {
            const { data: response } = await axios.post("http://localhost:3000/cadastro", data);
            return response;
        },
        onSuccess: (response) => {
            console.log(response.message);
        },
        onError: (err) => {
            console.error(err);
        }
    })
}