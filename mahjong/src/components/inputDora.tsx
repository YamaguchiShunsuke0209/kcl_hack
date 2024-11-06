import React from "react";

type props = {
    key: number;
    onInput: any;
}

const InputDora = ({key, onInput}: props) => {
    return(
        <>
            <div className="inputDora">
                <p>ドラ(赤含む)</p>
                    <input
                        key={key-1}
                        className="inputNum"
                        type="number"
                        id="dora"
                        defaultValue={0}
                        min="0"
                        max="20"
                        onInput={onInput}
                    ></input>
            </div>
            <div className="inputDora">
                <p>裏ドラ</p>
                <input
                    key={key-2}
                    className="inputNum"
                    type="number"
                    id="ura"
                    defaultValue={0}
                    min="0"
                    max="20"
                    onInput={onInput}
                ></input>
            </div>
        </>
    );
};

export default InputDora;
