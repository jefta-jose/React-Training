//CHILD COMPONENT
const Video = ({ w, h, controls }) => {
    return (
        <div>
            <video
                src={`https://placehold.co/${w}X${h}/orange/white`}
                width={w}
                height={h}
                controls={controls && controls}
                style={{ borderRadius: "5%", padding: "10px" }}
            ></video>
        </div>
    )
}

export default Video