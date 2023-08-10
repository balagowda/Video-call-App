import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const [roomId, setRoomId] = useState("");
  const [empty, setEmpty] = useState(false);
  const navigate = useNavigate();

  function handleChange(event) {
    setRoomId(event.target.value);
  }

  function handleCreateRoom() {
    if (roomId === "") {
      setEmpty(true);
    } else {
      navigate(`/room/${roomId}`);
    }
  }

  return (
    <>
      <div className="join-form">
        <h1 className="text-heading"> Join Meeting </h1>
        <input
          className="create-room"
          value={roomId}
          onChange={handleChange}
          placeholder="Enter room code"
        />
        {empty ? (
          <span className="warning">Please enter a room code to enter</span>
        ) : (
          ""
        )}
        <button className="create-room btn" onClick={handleCreateRoom}>
          {" "}
          Join{" "}
        </button>
      </div>
    </>
  );
}

export default Home;
