import React, { ChangeEvent, FC, useRef, useState } from 'react';

interface ISearcherProps {
    setGasData: React.Dispatch<React.SetStateAction<number>>,
    gasData: number,
}


const Searcher: FC<ISearcherProps> = ({ setGasData, gasData }) => {

    let inputRef = useRef<HTMLInputElement | null>(null);


    const [error, setError] = useState("");

    function updateValue({ target: { value } }: ChangeEvent<HTMLInputElement>) {
        (inputRef.current as HTMLInputElement).value = value;
    }

    function formHandler() {
        console.log(isNaN(inputRef.current?.value as unknown as number), inputRef.current?.value as unknown as number < 0);
        if (isNaN(inputRef.current?.value as unknown as number) || inputRef.current?.value as unknown as number <= 0) {
            setError("Total gas consumption must be a number higher than zero");
            (inputRef.current as HTMLInputElement).value = "0";
        } else {
            setGasData(inputRef.current?.value as unknown as number);
            setError("");
        }
    }

    let container = {
        width: "100%",
        border: "1px solid black",
        display: "inherit",
        justifyContent: "center",
        alignItems: "center",
    }

    return (
        <div style={container} >
            <div className="gas-form">
                <div>
                    <span className="form-title" >Total gas consumption </span>
                </div>
                <div>
                    <input
                        className="form-input"
                        type="text"
                        defaultValue={inputRef.current?.value}
                        onChange={updateValue}
                        ref={inputRef}
                    />
                    {error && error}
                </div>
                <div>
                    <input
                        className="form-btn"
                        type="button"
                        value="Search Products"
                        onClick={formHandler}
                    />
                </div>
            </div>
        </div>
    );
}

export default Searcher;
