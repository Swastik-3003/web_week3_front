import { useState } from "react"

const Forgot = (props) => {
    const [email,setEmail] = useState('')
    const sendMail = async (e) => {
        e.preventDefault();
        const em = email;
        try{
            const resp = await fetch('https://webweek3back-production.up.railway.app/api/forgot',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({email:em})
            })
            
            if(!resp.ok){
                return window.alert('Cannot Send Mail\n Try again later');
            }
            else{
                return window.alert('Password sent to your mail');
            }
        }   
        catch(err){
            window.alert(err);
        }
        finally{
            props.setForgotPass(false);
        }
    };
    return (
        <div className="forgotdiv">
            <h2>Enter your Email Id ....</h2>
            <div className='forgotsubdiv'>
                <div className="forgotimg"></div>
                <form>
                    <input type='email' required onChange={(e)=>setEmail(e.target.value)} value={email}></input>
                    <button className='forgotsubmit' onClick={sendMail}>Submit</button>
                </form>
            </div>
        </div>
    )
} 

export default Forgot