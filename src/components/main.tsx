import { useState } from "react";
import Form from "./form";
import cmEmPolegadas from "../utils/cmEmPolegadas";
import cmEmPes from "../utils/cmEmPes";

const Main = () => {
    const [alturaCm, setAlturaCm] = useState<number>(0);

    return (
        <main className="bg-cinza-claro rounded lg:mx-56 mx-4 flex flex-col gap-6 items-center  p-4">
            <h2 className="text-3xl">Digite sua altura em centímetros:</h2>

            <Form setAlturaCm={setAlturaCm} alturaCm={alturaCm} />

            <div className="flex flex-col items-center text-xl">
                {alturaCm > 0 ? <ul>
                    <li><p>{`Sua altura em centímetros é ${alturaCm}.`}</p></li>
                    <li><p>{`Sua altura em metros é ${alturaCm / 100}.`}</p></li>
                    <li><p>{`Sua altura em quilômetros é ${alturaCm / 100000}.`}</p></li>
                    <li><p>{`Sua altura em pés é ${cmEmPes(alturaCm)}.`}</p></li>
                    <li><p>{`Sua altura em polegadas é ${cmEmPolegadas(alturaCm)}.`}</p></li>
                </ul> : <p>Ainda não foi inserido uma altura.</p>}
            </div>
        </main>
    );
}

export default Main;