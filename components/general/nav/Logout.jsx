import React, { useEffect, useState } from 'react'

const Ball = ({active}) => {
    return(
        <div className={`general-bg w-[1.5rem] h-[1.5rem] rounded-full duration-300 ${active? "-translate-y-full" : ""}`}>

        </div>
    )
}

const Logout = () => {
    const [dots, setDots] = useState('')
    const [loaded, setLoaded] = useState(false)
    const [animLoaded, setAnimLoaded] = useState(false)
    const [activeBall, setActiveBall] = useState(0)
    const maxBalls = 3

    useEffect(()=>{
        function addDot () {

            let newDots = `${dots}.`

            if(newDots.length > 3){
                newDots = "";
            }
            setDots(newDots)
            
            setTimeout(()=>{
               setLoaded(false)
            }, 500)
        }

        if(!loaded){

            addDot();
            setLoaded(true)
        }

    }, [dots, loaded])

    useEffect(()=>{
        function startAnimation (){
            setTimeout(()=>{
                
                let newNum = activeBall + 1


                if(newNum >= maxBalls){
                    newNum = 0
                }

                setActiveBall(newNum)

                setTimeout(()=>{
                    setAnimLoaded(false)
                 }, 40)
            }, 100)

        }
        if(!animLoaded){

            startAnimation();
            setAnimLoaded(true)
        }
    }, [activeBall, animLoaded])
  return (
    <div className='flex flex-col items-center justify-center gap-4'>

        <div className="flex gap-6">

            {new Array(maxBalls).fill(0).map((_, index)=>(
                <Ball key={index} active={activeBall === index} />
            ))}

        </div>

        <p>Logging out Please wait{dots}</p>
      
    </div>
  )
}

export default Logout
