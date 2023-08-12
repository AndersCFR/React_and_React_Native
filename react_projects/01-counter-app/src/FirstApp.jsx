import PropTypes from 'prop-types';

const newMessage = 'Anderson !!!';

const getResult = (a,b) => {
    return a + b;
}

export const FirstApp = ({
    title, 
    subtitle
}) => {

    return (
        <>
            <h1> {title} </h1>
            <div>{subtitle}</div>
            <h3> {getResult(3,5)} </h3>
            <p>Soy un subtítulo</p>
        </>
    )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.number.isRequired
}

FirstApp.defaultProps = {
    title: 'No hay título',
    subtitle: 123,
    name: 'Anderson'
}
