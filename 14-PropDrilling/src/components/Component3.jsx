import Component4 from "./Component4"
const Component3 = ({ user }) => {
  return (
    <div>
      <h3>Component-3</h3>
      <p>age : {user.age}</p>
      <Component4 user={user} />
    </div>
  )
}

export default Component3