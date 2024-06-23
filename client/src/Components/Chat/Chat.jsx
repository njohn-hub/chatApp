import React, { useEffect, useRef, useState } from "react";
import "./Chat.css";
import EmojiPicker from "emoji-picker-react";

const Chat = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const endRef = useRef(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({behavior:"smooth"}) 
  },[])

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setOpen(false);
  };


  return (
    <div className="Chat">
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>John Doe</span>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>

      <div className="center">
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa,
              optio? Sed cum atque impedit tenetur, numquam hic omnis, corrupti
              repellendus quos quo repudiandae ab aut. Dolore aspernatur
              corrupti assumenda sequi.
            </p>
            <span>1 min ago</span>
          </div>
        </div>

        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa,
              optio? Sed cum atque impedit tenetur, numquam hic omnis, corrupti
              repellendus quos quo repudiandae ab aut. Dolore aspernatur
              corrupti assumenda sequi.
            </p>
            <span>1 min ago</span>
          </div>
        </div>

        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa,
              optio? Sed cum atque impedit tenetur, numquam hic omnis, corrupti
              repellendus quos quo repudiandae ab aut. Dolore aspernatur
              corrupti assumenda sequi.
            </p>
            <span>1 min ago</span>
          </div>
        </div>

        <div className="message own">
          <div className="texts">
          <img
            src="https://images.pexels.com/photos/25974821/pexels-photo-25974821/free-photo-of-a-solitary-journey-through-the-vastness-of-a-desert-landscape-the-singular-road-that-cuts-through-the-arid-expanse-guiding-a-lone-vehicle-towards-an-unknown-destination.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            alt=""
          />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa,
              optio? Sed cum atque impedit tenetur, numquam hic omnis, corrupti
              repellendus quos quo repudiandae ab aut. Dolore aspernatur
              corrupti assumenda sequi.
            </p>
            <span>1 min ago</span>
          </div>
        </div>

        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa,
              optio? Sed cum atque impedit tenetur, numquam hic omnis, corrupti
              repellendus quos quo repudiandae ab aut. Dolore aspernatur
              corrupti assumenda sequi.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div ref={endRef}></div>
      </div>

      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input
          type="text"
          placeholder=" Message "
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="emoji">
          <img
            src="./emoji.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
          <div className="picker">
            <EmojiPicker open={open} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button className="sendButton">Send</button>
      </div>
    </div>
  );
};

export default Chat;
