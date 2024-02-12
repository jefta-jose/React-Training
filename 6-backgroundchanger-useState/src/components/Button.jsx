import './Button.scss'

const Button = ({ color, changeBGFunc }) => {

    const styles = {
        backgroundColor: color,
        color: 'white',
    }

    return (
        <button className='Btn'
            style={styles}
            onClick={() => changeBGFunc(color)}
        >
            {color}
        </button>
    )
}

export default Button