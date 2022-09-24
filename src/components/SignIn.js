import { Button } from '@mui/material';
import React from 'react';
import firebase from 'firebase/compat/app';
import { auth } from '../firebase.js';

function SignIn() {
    function siginInWidthGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider); //ログインできるようにする
    }
    return (
        <div><Button onClick={siginInWidthGoogle}>グーグルでログインする</Button></div>
    )
}

export default SignIn