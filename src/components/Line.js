import React, { useState, useEffect, useRef } from "react";
import { db, auth } from "../firebase.js";
import SendMessage from "./SendMessage.js";
import SignOut from "./SignOut";

function Line() {
    const scroll = useRef();
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        db.collection('messages')
            .orderBy('createdAt')
            .limit(50)
            .onSnapshot((snapshot) => {
                setMessages(snapshot.docs.map((doc) => doc.data()));
            });
    }, []); //空の配列は一度だけ読むために入れる

    return (
        <div>
            <SignOut />
            <div className="msgs">
                {messages.map(({ id, text, photoURL, uid }) => (
                    <div>
                        <div key={id}
                            className={`msg ${uid === auth.currentUser.uid ? "sent" : "received"}`}>
                            <img src={photoURL} alt="" />
                            <p>{text}</p>
                            <hr />
                        </div>
                    </div>
                ))}
            </div>
            <SendMessage scroll={scroll} />
            <div ref={scroll}></div>
        </div>
    )
}

export default Line