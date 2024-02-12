import Component1 from "./Component1"
import Component2 from "./Component2"
import Component3 from "./Component3"

function UserComponent({ user }) {
    return (
        <div>
            <h2>UserComponent</h2>
            <p>Some text about UserComponent.</p>
            {user && <p>{user.name}</p>}
            <Component1 email={user.email} />
            <Component2 />
            <Component3 user={user} />
        </div>
    )
}

export default UserComponent