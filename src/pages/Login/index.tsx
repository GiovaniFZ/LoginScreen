import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button/style";
import { Checkbox, Input } from "../../components/Input/style";
import { LoginContent, LoginSquare } from "./style";

export default function Login() {
    const navigate = useNavigate();
    function handleClick(){
        navigate('/dashboard');
    }
    return (
        <LoginContent>
            <LoginSquare>
            <h1>Faça seu login!</h1>
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Senha" />
            <Checkbox>
            <Input type="checkbox" id="maincheck" />
            <label htmlFor="maincheck">Mantenha-me conectado</label>
            </Checkbox>
            <Button onClick={handleClick}>Entrar</Button>
            </LoginSquare>
        </LoginContent>
    )
}