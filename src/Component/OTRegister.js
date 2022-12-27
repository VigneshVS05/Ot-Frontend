import React, {  useState } from 'react';
import  "./OTRegister.css";
import axios from 'axios';
import Dropdown from 'react-dropdown';

import 'react-dropdown/style.css';


const OTRegister=()=>{
    const[reg, setReg]=useState({
    
      regOTSlabName: "",
      regOTSlabType: "",
      regPayGroup: "",
      regHrsComponet:"",
      regOTValueComponent:"",
      regBaseComponent: "",
      regOTRate: "",
      regConsiderforOT: "",
      regMonthlyRate: "",
      regStartDate: "",
      regEndDate: "",
      regTotal: "",
      
    })

    const options = [
      { value: 'Yes', label: 'Yes' },
  { value: 'No', label: 'No' },

     
    ];
    

    const{regOTSlabName,regOTSlabType,regPayGroup,regHrsComponet,regOTValueComponent,regBaseComponent,regOTRate,regMonthlyRate,regStartDate,regEndDate}=reg;

    function oninputChange1() {
        var txt = document.getElementById("text_id").required=("*please enter your SlabName");
                         
        document.getElementById("GFG").innerHTML = txt;

        var demo2 = document.getElementById("d1").required=("*please enter StartDate");
                         
        document.getElementById("GFG1").innerHTML = demo2;

        var demo3 = document.getElementById("d2").required=("*please enter EndDate");
                         
        document.getElementById("GFG2").innerHTML = demo3;


             let y = document.getElementById("numb").value;
 
             let text1;
                if (isNaN(y) || y < 1 || y > 12) {
                 text1 = "*Please Enter valid month.";
                       } else {
                     text1 = "Input OK";
                     }
                  document.getElementById("demo").innerHTML = text1;
    
    }

    function onclicker(){      
      var percent = document.getElementById("d5").value; 
    
      var num = document.getElementById("OTValue").value;
      var king = num * percent;
      document.getElementById("numb1")
      .value =num * percent;
      setReg({...reg,regOTRate:king.toString()});
      console.log(reg.regOTRate)
    }

    const oninputChange= e=>{
    setReg({...reg,[e.target.name]:e.target.value});

    }
    const onSubmit = async =>{
        
       axios.post("https://localhost:7021/api/Welcome/InsertOT",reg);
        alert ("Data inserted");
    };
    return(
       <div className='Container'>
            <div className='text-center'>
                <h2 className='head'>OT Rate Definition</h2>
                <form onSubmit={e =>onSubmit(e)}>
            
              
               <div className='Tots'>
                <div className="form-group">
                   <h4 className='n1'>OTSlab Name :<input type="text"  id="text_id" placeholder="OTSlabName"name="regOTSlabName"value={regOTSlabName}
                    onChange={e =>oninputChange(e)}
                    />
                    <p onClick={oninputChange} id="GFG"></p>
                    </h4>
                </div>
                <br></br>
            
                <div className="b1">
                 <h4 className='n2'>OTSlab Type :<input type ="text"  placeholder="OTSlabType"name="regOTSlabType"value={regOTSlabType}
                    onChange={e =>oninputChange(e)}
                   />
                  </h4>
                </div>
                
                <br></br>

                <div className="pay">
                  <h4>Pay Group :<input type ="text" placeholder="PayGroup"name="regPayGroup"value={regPayGroup}
                    onChange={e => oninputChange(e)}
                    /></h4>
                </div>
                <br></br>
                <div className="hrs">
                 <h4>Hrs Component :<input type ="number" id='d5'  placeholder="HrsComponet"name="regHrsComponet"value={regHrsComponet}
                    onChange={e =>oninputChange(e)}
                   required />
                     <p onClick={oninputChange1} id="GFG3"></p>
                    </h4>
                </div>
                <br></br>
                <div className="OTvalue">
                 <h4>OTValue Component :<input id='OTValue' type ="number" placeholder="OTValueComponent"name="regOTValueComponent"value={regOTValueComponent}
                    onChange={e =>oninputChange(e)}
                    />
                    <p onClick={oninputChange1} id="OTValue1"></p>
                    </h4> 
                </div>
                </div>
                <br></br>               
                <div className='Tots2'>
                <div className="Base">
                  <h4>Base Component:<input type ="text" placeholder="BaseComponent"name="regBaseComponent"value={regBaseComponent}
                    onChange={e => oninputChange(e)}
                    /></h4> 
                </div>
                <br></br>   


                <div className="a2">
                 <h4>OTRate:<input type ="text" id='numb1'  placeholder="OTRate"name="regOTRate"value={regOTRate}
                    onChange={e =>oninputChange(e)}
                    />
                     <p onClick={oninputChange1} id="demo1"></p>
                    </h4>
                </div>

                <br></br>
                <div className='h11'>
                  <h4 className='OT'>Consider for OT: </h4>
                  <Dropdown  options={options} name='regConsiderforOT'  onChange={(value) => setReg({...reg,
                  regConsiderforOT:value.value})} className="Consider" value={reg.regConsiderforOT} placeholder="Select" />  
                  <p onClick={oninputChange1} id="demo2"></p>               
                </div> 
                <br/>
                <br/>         
               <br></br>
                 <div className="Month">
                  <h4>Monthly Rate :<input type ="text" id='numb' maxLength={2} placeholder="MonthlyRate" name="regMonthlyRate"value={regMonthlyRate}
                    onChange={e =>oninputChange(e)}                  
                   />
                    <p onClick={oninputChange1} id="demo"></p>
                    </h4> 
                </div>                 
                <br></br>
                <div className="Start">
                  <h4>Start Date :<input type="date" id='d1' placeholder="regStartDate"name="regStartDate"value={regStartDate}
                    onChange={e =>oninputChange(e)}
                    />            
                     <p onClick={oninputChange} id='GFG1'></p>                    
                    </h4> 
                </div>
                <br></br>
                 <div className="End">
                  <h4>End Date :<input type ="date" id='d2' placeholder="regEndDate" name="regEndDate"value={regEndDate}
                    onChange={e =>oninputChange(e)}
                    />  
                    <p onClick={oninputChange} id='GFG2'></p>                                    
                    </h4>
                </div>
                </div>            
                <button  type="Submit"  className='but'  onMouseOut={onclicker} onClick={oninputChange1} >SaveData</button>            
                </form>               
                </div>
                </div>       
    )
}
export default OTRegister;