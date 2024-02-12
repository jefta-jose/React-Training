import './App.css'
import Avatar from './Components/Avatar'
import Video from './Components/Video'

//PARENT COMPONENT
function App() {
  const videoProperties = {
    width: 800,
    height: 500,
    controls: true,
  }

  const AvatarArray = [
    {
      w: 500,
      h: 240,
    },
    {
      w: 800,
      h: 400,
    },
  ];

  return (
    <>
      {/* FIRST COMPONENT */}
      <Avatar w={320} h={240} />
      {/* SECOND COMPONENT */}
      <Avatar w={400} h={320} />
      {/* THIRD COMPONENT */}
      <Video src="https://placehold.co/800x500.mp4"        {...videoProperties} />
      {/* FOURTH COMPONENT */}
      <h3>Array of Avatars</h3>
      {
        AvatarArray.map((avatar, index) => (
          <Avatar
            key={index}
            w={avatar.w}
            h={avatar.h}
          />
        ))
      }
    </>
  )
}

export default App
