import IForm from "../interfaces/IForm";

const Form =(props: IForm) => {
    let valor = props.alturaCm;
    const aoSubmitar = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();
        props.setAlturaCm(valor);
    }
    return (
        <form onSubmit={aoSubmitar} className="flex">
            <input className="text-2xl rounded pl-0.5" type="number" min={1} max={300} onChange={evento => valor = Number(evento.target.value)} required />
        </form>
    );
}

export default Form;