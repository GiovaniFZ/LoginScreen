import { Card } from "../../components/Card/style";
import { DashboardContent } from "./style";

export default function Dashboard() {
    return (
        <>
            <header>
                <h1>Bem vindo, Giovani!</h1>
            </header>
            <DashboardContent>
                <Card>
                    <h1>Tickets</h1>
                </Card>
                <Card>
                    <h1>Faturas</h1>
                </Card>
            </DashboardContent>
        </>
    )
}