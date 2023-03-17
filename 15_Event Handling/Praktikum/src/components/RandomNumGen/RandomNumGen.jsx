import Button from "../../elements/Button/Button";
import { useEffect, useState } from "react";

const RandomNumGen = () => {

    const [randomNum, setRandomNum] = useState(5)

    return (
        <>
            <div className="container d-flex flex-column mt-5 justify-content-center">
                <div class="p-2">
                    <p>Nomor random yang keluar adalah : {randomNum} </p>
                </div>
                <div class="p-2">
                    <Button 
                        className="btn btn-success"
                        label="Generate"
                        onClick={() => setRandomNum(Math.ceil(Math.random() * 100))}
                    />
                </div>
            </div>
        </>
    );
}

export default RandomNumGen