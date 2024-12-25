import { Button } from "../../components/Button/style";
import { Input } from "../../components/Input/style";
import { LoginContent, LoginSquare } from "./style";

export default function Login() {
    return (
        <LoginContent>
            <LoginSquare>
            <h1>Faça seu login!</h1>
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Senha" />
            <Button>Entrar</Button>
            </LoginSquare>
        </LoginContent>
    )
}