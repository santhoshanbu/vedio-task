import {useEffect, useState} from 'react'
import { useNavigate  } from 'react-router-dom'

function Login() { 
    const usersData = localStorage.getItem('user');
    const users = usersData ? JSON.parse(usersData):[];

    const [data,updata]=useState([...users])
    const [boolean,upboolean]=useState(false)
    const [error,uperror]=useState(false)
    const [nameinput,upnameinput]=useState('')
    const [emailinput,upemailinput]=useState('')
    const [passinput,uppassinput]=useState('')
    let navigate = useNavigate ();


    const login=()=>{
        let count=0;
        users.map((item)=>{
            if(item.name===nameinput&&item.email===emailinput&&item.pass===passinput){
                count+=1;
                window.open("http://twitter.com/saigowthamr", "_blank");            }
        })
        if(count===0){
            uperror(true)
        }
    }

    const signin=()=>{
        if(nameinput.trim()==='' || emailinput.trim()==='' || passinput.trim()===''){
            upboolean(true)
            return
        }else{
            upboolean(false)
        }
        const details={name:nameinput,email:emailinput,pass:passinput}
        const newdata=[...data]
        newdata.push(details)
        updata(newdata)
        localStorage.setItem('user',JSON.stringify(newdata))
        upnameinput('')
        upemailinput('')
        uppassinput('')
        navigate('/movies')
    }
    return (
        <div>
            <form  class='container' style={{ width: '50%', marginTop: '7%', padding: '3%', height: '100%', border: '1px solid #adb5bd' }}>
                <div class="form-group">
                    <label>Name</label>
                    <input value={nameinput} onChange={(e)=>upnameinput(e.target.value)} type="text" class="form-control"  placeholder="Enter your name" />
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input value={emailinput} onChange={(e)=>upemailinput(e.target.value)} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input value={passinput} onChange={(e)=>uppassinput(e.target.value)} type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <div style={{marginTop:'3%',marginBottom:'2%',color:'red'}}>{error ?'incorrect username and password':'' }</div>
                <div style={{marginTop:'3%',marginBottom:'2%',color:'red'}}>{boolean ?'please fill the all feild':'' }</div>
                <button onClick={()=>signin()} type="button"  class="btn btn-primary" style={{marginRight:'3%'}}>Signin</button>
                <button onClick={()=>login()} type="button"  class="btn btn-primary">Login</button>
                
            </form>
        </div>
    )
}

export default Login