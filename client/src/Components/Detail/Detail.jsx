import React from "react";
import "./Detail.css";
import { auth } from "../../lib/firebase";

const Detail = () => {
  return (
    <div className="Detail">
      <div className="user">
        <img src="./avatar.png" alt="" />
        <h2>John Doe</h2>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>

        <div className="option">
          <div className="title">
            <span>Privacy % Help</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>

        <div className="option">
          <div className="title">
            <span>Shared Photos</span>
            <img src="./arrowDown.png" alt="" />
          </div>
          <div className="photos">

            <div className="photoItem">
              <div className="photoDetail">
              <img
                src="https://images.pexels.com/photos/25288421/pexels-photo-25288421/free-photo-of-model-in-blue-dress-with-black-scarf-on-her-shoulder.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                alt=""
              />
              <span>photo_4304.png</span>
              </div>
              <img src="./download.png" className="icon"  alt="" />
            </div>

            <div className="photoItem">
              <div className="photoDetail">
              <img
                src="https://images.pexels.com/photos/25288421/pexels-photo-25288421/free-photo-of-model-in-blue-dress-with-black-scarf-on-her-shoulder.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                alt=""
              />
              <span>photo_4304.png</span>
              </div>
              <img src="./download.png" className="icon" alt="" />
            </div>

          </div>
        </div>

        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <button>Block User</button>
        <button className="logout" onClick={()=>auth.signOut()}>Logout</button>
      </div>
    </div>
  );
};

export default Detail;
