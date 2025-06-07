type HeadProps = {
  on: boolean;
  setOn: (on: boolean) => void;
}

export function SwitchOnOff({ on, setOn } : HeadProps) {
    return(
        <>
            <div 
                className="container"
                style={{
                    boxShadow: 'inset 4px 4px 10px lightgray',
                    borderRadius: '30px'
                }}
            >
                <input type="checkbox" name="switch" id="switch" checked={ on } onChange={ () => setOn(!on) } />
                <label htmlFor="switch" className="label"></label>
            </div>

            <style>
                {`
                .container {}

                .label {
                    height: 35px;
                    width: 100%;
                    background-color: #ffffff;
                    border-radius: 30px;
                    box-shadow: inset 0 0 5px 4px rgba(255, 255, 255, 1),
                    inset 0 0 20px 1px rgba(0, 0, 0, 0.488),
                    10px 20px 30px rgba(0, 0, 0, 0.096),
                    inset 0 0 0 3px rgba(0, 0, 0, 0.3);
                    display: flex;
                    align-items: center;
                    cursor: pointer;
                    position: relative;
                    transition: transform 0.4s;
                }

                .label:hover {
                    transform: perspective(100px) rotateX(5deg) rotateY(-5deg);
                }

                #switch:checked ~ .label:hover {
                    transform: perspective(100px) rotateX(-5deg) rotateY(5deg);
                }

                #switch {
                    display: none;
                }

                #switch:checked ~ .label::before {
                    left: 60px;
                    background-color: #000000;
                    transition: 0.4s;
                }

                .label::before {
                    position: absolute;
                    content: "";
                    height: 15px;
                    width: 20px;
                    border-radius: 50%;
                    background-color: #000000;
                    background-image: linear-gradient(
                    130deg,
                    #757272 10%,
                    #ffffff 11%,
                    #726f6f 62%
                    );
                    left: 10px;
                    box-shadow: 0 2px 1px rgba(0, 0, 0, 0.3);
                    transition: 0.4s;
                }
                `}
            </style>
        </>
    );
}