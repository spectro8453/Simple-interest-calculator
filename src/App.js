import './App.css';
import { TextField,Stack,Button, stepIconClasses} from '@mui/material';
import { useState } from 'react';

function App() {
  const[interest,setInterest]=useState(0)
  const[principle,setPrinciple]=useState(0)
  const[rate,setRate]=useState(0)
  const[year,setYear]=useState(0)
  const [isPrinciplevalid,setIsprinciplevalid]=useState(true)
  const [isRatevalid,setIsratevalid]=useState(true)
  const [isYearvalid,setIsyearvalid]=useState(true)

  const handleCalculate=(e)=>{
    e.preventDefault()
    if(!principle || !rate || !year){
      alert("please fill the form completely")
    }else{
      setInterest(principle*rate*year/100)
    }

  }
  const validateInput=(e)=>{
    const {value,name}=e.target
    if(!!value.match(/^[0-9]+$/)){
      // invalid expression 
      if(name==="principle"){
        setPrinciple(value)
        setIsprinciplevalid(true)
      }else if(name==="rate"){
        setRate(value)
        setIsratevalid(true)
      }else{
        setYear(value)
        setIsyearvalid(true)
      }
     
    }else{
      if(name==="principle"){
        setPrinciple(value)
        setIsprinciplevalid(false)
      }else if(name==="rate"){
        setRate(value)
        setIsratevalid(false)
      }else{
        setYear(value)
        setIsyearvalid(false)
      }
    }
  }
  const handleReset=(e)=>{
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setInterest(0)
    setIsprinciplevalid(true)
    setIsratevalid(true)
    setIsyearvalid(true)
  }

  return (

    <div style={{height:"100vh"}} className='d-flex w-100 justify-content-center align-items-center bg-dark' >
      <div  style={{width:"700px"}} className=' bg-light rounded p-5'> 
      <div className='heading'>
        <h3>Simple Calculator</h3>
        <p>Calculate your simple interest Easily</p>
      </div>
      <div  className='interest-card w-100 flex-column rounded d-flex justify-content-center align-items-center bg-warning text-light shadow'>
        <h1>₹ {' '} {interest}  </h1>
        <p className='fw-bold'>Total Simple Interest</p>
      </div>
      <form onSubmit={handleCalculate} className='mt-5'>
      <div className='mb-3'>  
      <TextField className='w-100' id="standard-basic" label="₹ Principal amount" variant="standard"  value={principle || ""} name='principle' onChange={(e)=>validateInput(e)}/>
      </div>
      {
        !isPrinciplevalid &&
        <div className='mb-3 text-danger' >
          *Invalid Principle Amount 
        </div>
      }
      <div className='mb-3'>  
      <TextField className='w-100' id="standard-basic" label="Rate of interest (p.a) %" variant="standard" value={rate || ""} name='rate' onChange={(e)=>validateInput(e)}/>
      </div>
      {
        !isRatevalid &&
        <div className='mb-3 text-danger' >
          *Invalid Rate Value
        </div>
      }

      <div className='mb-3'>  
      <TextField className='w-100' id="standard-basic" label="year ( Yr )" variant="standard" value={year || ""} name='year' onChange={(e)=>validateInput(e)}/>
      </div>
      {
        !isYearvalid &&
        <div className='mb-3 text-danger' >
          *Invalid Year Input
        </div>
      }

      

      <Stack direction="row" spacing={2}>
      <Button type='submit' style={{width:'200px',height:'70px'}} disabled={isPrinciplevalid && isRatevalid && isYearvalid?false:true} variant="contained">CALCULATE</Button>
      <Button onClick={handleReset} style={{width:'200px',height:'70px'}} variant="outlined">RESET</Button>
      </Stack>
      </form>
      </div>
    </div>
  );
}

export default App;