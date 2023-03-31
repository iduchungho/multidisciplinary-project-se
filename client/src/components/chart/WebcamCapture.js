import Webcam from "react-webcam";

const videoConstraints = {
    width: 450,
    height: 210,
    facingMode: "user"
  };
  
const WebcamCapture = () => (
    <Webcam  
      audio={false}
      height={192}
      screenshotFormat="image/jpeg"
      width={410}
      videoConstraints={videoConstraints}
    >
      {/* {({ getScreenshot }) => (
        <button
          onClick={() => {
            const imageSrc = getScreenshot()
          }}
        >
          Capture photo
        </button>
      )} */}
    </Webcam>
  );

export default WebcamCapture;