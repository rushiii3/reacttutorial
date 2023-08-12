import { Button, Input } from '@nextui-org/react';
import React, { useState } from 'react';
import {useDispatch,useSelector} from 'react-redux'
import { login,logout } from '../Store/store'
export const Login = () => {
    const dispatch = useDispatch();
    const usename = useSelector((state) => state.user.value.username);
    const [Name, setName] = useState("");
    const HandleSubmit = () => {
        console.log(dispatch(login({username : Name})));
    }
    const LogoutSubmit = () => {
        dispatch(logout());
    }
  return (
    <div>
        <h1>{usename}  hey</h1>
        <Input
              type="text"
              label="First Name"
              placeholder="Hrushi"
              labelPlacement="outside"
              value={Name}
              onChange={(e) => {setName(e.target.value)}}
            >
                </Input>
                <Button color="warning" onClick={HandleSubmit}>
                    Login
                </Button>
                <Button color="default" onClick={LogoutSubmit}>
                    Logout
                </Button>
    </div>
  )
}
