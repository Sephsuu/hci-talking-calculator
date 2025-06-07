import { useEffect, useState } from 'react';
import { SwitchOnOff } from './components/ui/customOnOff';
import { Input } from './components/ui/input'
import { Speaker } from './components/ui/speaker';
import { Volume } from './components/ui/volum';
import './index.css'
import { playSound } from './lib/utils';
import { evaluate } from 'mathjs';

function Head({ display } : { display: string }) {
  return(
    <section className='flex gap-2 w-full'>

      <div 
        className='w-[20%] rounded-sm shadow-md' 
        style={{ 
          background: 'url("/images/solar_panel.jpg")',
          backgroundPosition: '50%',
          boxShadow: '4px 4px inset lightgray'
      }}>
        
      </div>

      <div 
        className='flex w-[50%] bg-white rounded-sm z-50 overflow-hidden'
        style={{
          background: 'linear-gradient(315deg, hsla(0, 0%, 31%, 1) 0%, hsla(0, 0%, 15%, 1) 46%, hsla(0, 0%, 0%, 1) 100%)',
          boxShadow: '4px 4px inset lightgray'
        }}
      >
        <Input 
          className='h-full !text-4xl font-semibold text-end border-0' 
          style={{ 
            fontFamily: '"Doto", sans-serif', 
            fontWeight: '800'
          }}
          placeholder={ display }
          readOnly 
        />
      </div>

      <div className='w-[30%]'>
        <div 
          className='text-wrap text-2xl font-bold'
          style={{
            textShadow: '2px 2px 4px lightgray',
          }}
        >
          Talking Calculator
        </div>
      </div>
    </section>
  );
}

type ButtonOpsProps = {
  isPlaying: boolean;
  on: boolean;
  setOn: (on: boolean) => void;
}

function ButtonOps({ isPlaying, on, setOn } : ButtonOpsProps) {
  return(
    <section className='flex items-center w-full gap-2 mt-2'>

      <div className='w-[20%]'>
        <div className='text-sm w-full text-center font-semibold'>On/Off</div>
        <SwitchOnOff on={ on } setOn={ setOn } />
      </div>

      <div className='w-[35%]'>
        <Volume />
      </div>

      <div className='w-[45%]'>
        <Speaker isPlaying={ isPlaying } />
      </div>

    </section>
  );
}

type ButtonsProps = {
  on: boolean;
  setIsPlaying: (is: boolean) => void;
  charClicked: (is: string) => void;
  deleteClicked: () => void;
  clearClicked: () => void;
  equalClicked: () => void;
};


function Buttons({ on, setIsPlaying, charClicked, deleteClicked, clearClicked, equalClicked } : ButtonsProps) {

  return(
    <>
      <section className='relative flex justify-center gap-2 w-full h-full mt-2'>
        <div className='flex flex-col gap-2'>

          <div 
            className='w-20 h-20 border-1 border-gray-200 rounded-full' 
            style={{ 
              boxShadow: '3px 3px lightgray',
            }}>
            <button onClick={ () => { playSound("seven", on, () => setIsPlaying(true), () => setIsPlaying(false)); charClicked("7") } } className='w-full h-full !rounded-full flex justify-center items-center !text-3xl !font-bold !bg-white'>7</button>
          </div>

          <div 
            className='w-20 h-20 border-1 border-gray-200 rounded-full' 
            style={{ 
              boxShadow: '3px 3px lightgray',
            }}>
            <button onClick={ () => { playSound("four", on, () => setIsPlaying(true), () => setIsPlaying(false)); charClicked("4") } } className='w-full h-full !rounded-full flex justify-center items-center !text-3xl !font-bold !bg-white'>4</button>
          </div>

          <div 
            className='w-20 h-20 border-1 border-gray-200 rounded-full' 
            style={{ 
              boxShadow: '3px 3px lightgray',
            }}>
            <button onClick={ () => { playSound("one", on, () => setIsPlaying(true), () => setIsPlaying(false)); charClicked("1") } } className='w-full h-full !rounded-full flex justify-center items-center !text-3xl !font-bold !bg-white'>1</button>
          </div>

        </div>

        <div className='flex flex-col gap-2'>

          <div 
            className='w-20 h-20 border-1 border-gray-200 rounded-full' 
            style={{ 
              boxShadow: '3px 3px lightgray',
            }}>
            <button onClick={ () => { playSound("eight", on, () => setIsPlaying(true), () => setIsPlaying(false)); charClicked("8") } } className='w-full h-full !rounded-full flex justify-center items-center !text-3xl !font-bold !bg-white'>8</button>
          </div>

          <div 
            className='w-20 h-20 border-1 border-gray-200 rounded-full' 
            style={{ 
              boxShadow: '3px 3px lightgray',
            }}>
            <button onClick={ () => { playSound("five", on, () => setIsPlaying(true), () => setIsPlaying(false)); charClicked("5") } } className='w-full h-full !rounded-full flex justify-center items-center !text-3xl !font-bold !bg-white'>5</button>
          </div>

          <div 
            className='w-20 h-20 border-1 border-gray-200 rounded-full' 
            style={{ 
              boxShadow: '3px 3px lightgray',
            }}>
            <button onClick={ () => { playSound("two", on, () => setIsPlaying(true), () => setIsPlaying(false)); charClicked("2") } } className='w-full h-full !rounded-full flex justify-center items-center !text-3xl !font-bold !bg-white'>2</button>
          </div>

        </div>

        <div className='flex flex-col gap-2'>

          <div 
            className='w-20 h-20 border-1 border-gray-200 rounded-full' 
            style={{ 
              boxShadow: '3px 3px lightgray',
            }}>
            <button onClick={ () => { playSound("nine", on, () => setIsPlaying(true), () => setIsPlaying(false)); charClicked("9") } } className='w-full h-full !rounded-full flex justify-center items-center !text-3xl !font-bold !bg-white'>9</button>
          </div>

          <div 
            className='w-20 h-20 border-1 border-gray-200 rounded-full' 
            style={{ 
              boxShadow: '3px 3px lightgray',
            }}>
            <button onClick={ () => { playSound("six", on, () => setIsPlaying(true), () => setIsPlaying(false)); charClicked("6") } } className='w-full h-full !rounded-full flex justify-center items-center !text-3xl !font-bold !bg-white'>6</button>
          </div>

          <div 
            className='w-20 h-20 border-1 border-gray-200 rounded-full' 
            style={{ 
              boxShadow: '3px 3px lightgray',
            }}>
            <button onClick={ () => { playSound("three", on, () => setIsPlaying(true), () => setIsPlaying(false)); charClicked("3") } } className='w-full h-full !rounded-full flex justify-center items-center !text-3xl !font-bold !bg-white'>3</button>
          </div>

          <div 
            className='w-20 h-20 border-1 border-gray-200 rounded-full' 
            style={{ 
              boxShadow: '3px 3px lightgray',
            }}>
            <button onClick={ () => { playSound("decimal", on, () => setIsPlaying(true), () => setIsPlaying(false)); charClicked(".") } } className='w-full h-full !rounded-full flex justify-center items-center !text-3xl !font-bold !bg-white'>.</button>
          </div>

        </div>

        <div className='flex flex-col gap-2'>

          <div 
            className='w-20 h-20 border-1 border-gray-200 rounded-full' 
            style={{ 
              boxShadow: '3px 3px lightgray',
            }}>
            <button onClick={ () => { playSound("multiply", on, () => setIsPlaying(true), () => setIsPlaying(false)); charClicked("*") } } className='w-full h-full !rounded-full flex justify-center items-center !text-3xl !font-bold !bg-white'>X</button>
          </div>

          <div 
            className='w-20 h-20 border-1 border-gray-200 rounded-full' 
            style={{ 
              boxShadow: '3px 3px lightgray',
            }}>
            <button onClick={ () => { playSound("minus", on, () => setIsPlaying(true), () => setIsPlaying(false)); charClicked("-") } } className='w-full h-full !rounded-full flex justify-center items-center !text-3xl !font-bold !bg-white'>-</button>
          </div>

          <div 
            className='w-20 h-42 border-1 border-gray-200 rounded-full' 
            style={{ 
              boxShadow: '3px 3px lightgray',
            }}>
            <button onClick={ () => { playSound("plus", on, () => setIsPlaying(true), () => setIsPlaying(false)); charClicked("+") } } className='w-full h-full !rounded-full flex justify-center items-center !text-3xl !font-bold !bg-white'>+</button>
          </div>

        </div>

        <div className='flex flex-col gap-2'>

          <div 
            className='w-20 h-20 border-1 border-gray-200 rounded-full' 
            style={{ 
              boxShadow: '3px 3px lightgray',
            }}>
            <button onClick={ () => { playSound("divide", on, () => setIsPlaying(true), () => setIsPlaying(false)); charClicked("/") } } className='w-full h-full !rounded-full flex justify-center items-center !text-3xl !font-bold !bg-white'>/</button>
          </div>

          <div 
            className='w-20 h-20 border-1 border-gray-200 rounded-full' 
            style={{ 
              boxShadow: '3px 3px lightgray',
            }}>
            <button onClick={ () => { playSound("clear", on, () => setIsPlaying(true), () => setIsPlaying(false)); clearClicked() } } className='w-full h-full !rounded-full flex justify-center items-center !text-3xl !font-bold !bg-white'>C</button>
          </div>

          <div 
            className='w-20 h-20 border-1 border-gray-200 rounded-full' 
            style={{ 
              boxShadow: '3px 3px lightgray',
            }}>
            <button onClick={ () => { playSound("delete", on, () => setIsPlaying(true), () => setIsPlaying(false)); deleteClicked() } } className='w-full h-full !rounded-full flex justify-center items-center !text-xl !font-bold !bg-white'>DEL</button>
          </div>

          <div 
            className='w-20 h-20 border-1 border-gray-200 rounded-full' 
            style={{ 
              boxShadow: '3px 3px lightgray',
            }}>
            <button onClick={ () => { playSound("equal", on, () => setIsPlaying(true), () => setIsPlaying(false)); equalClicked() } } className='w-full h-full !rounded-full flex justify-center items-center !text-3xl !font-bold !bg-white'>=</button>
          </div>

        </div>

        <div 
            className='absolute w-40 h-20 border-1 border-gray-200 rounded-full bottom-0 left-0 ml-5' 
            style={{ 
              boxShadow: '3px 3px lightgray',
            }}>
          <button onClick={ () => { playSound("zero", on, () => setIsPlaying(true), () => setIsPlaying(false)); charClicked("0") } } className='w-full h-full !rounded-full flex justify-center items-center !text-3xl !font-bold !bg-white'>0</button>
        </div>
        
      </section>
    </>
  );
}

function App() {
  const [on, setOn] = useState<boolean>(false);
  const [display, setDisplay] = useState<string>('');
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [fromEqual, setFromEqual] = useState<boolean>(false);

  useEffect(() => {
    if (on) {
      setDisplay("WELCOME!!")
    } else setDisplay(''); setFromEqual(false)
    console.log(on);
    
    
  }, [on])

  function charClicked(char: string) {
    if (on) {
      if (display !== '' && display !== 'WELCOME!!') {
        if (fromEqual) {
          setDisplay(char);
          setFromEqual(false)
        } else setDisplay(prev => prev + String(char));
      } else setDisplay(char);
    }
  }

  function deleteClicked() {
    setDisplay(prev => prev.slice(0, -1))
  }

  function clearClicked() {
    setDisplay('')
  }

  function equalClicked() {
    setDisplay(evaluate(display));
    setFromEqual(true);
  }

  return (
      <section className='bg-oatmeal w-full flex justify-center items-center h-screen'>

        <div 
          className='flex flex-col w-120 my-24 bg-light border-1 border-slate-200 rounded-md py-4 px-2'
          style={{
            boxShadow: '10px 10px lightgray'
          }}
        >
          <Head display={ display } />

          <ButtonOps 
            isPlaying={ isPlaying } 
            on={ on } 
            setOn={ setOn } 
          />

          <Buttons  
            setIsPlaying={ setIsPlaying } 
            on={ on } 
            charClicked={ charClicked } 
            deleteClicked={ deleteClicked }
            clearClicked={ clearClicked }
            equalClicked={ equalClicked }
          />
        </div>

      </section>
    )
  }

export default App
