import React from "react";
import useScreenRecording from "use-screen-recording";
 
export default function Recording() {
  const { isRecording, recording, toggleRecording } = useScreenRecording();
 
  return (
    <div>
      <button onClick={toggleRecording}>
        {isRecording ? "Stop" : "Start Recording"}
      </button>
 
      {!!recording && (
        <video autoPlay src={recording && URL.createObjectURL(recording)} />
      )}
    </div>
  );
}