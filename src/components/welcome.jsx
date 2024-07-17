import style, { styled } from 'styled-components'

const StyledButton = styled.button`
    background-colour: black;
    font-size: 40px;
    color: blue;

`

function Welcome () {
    return (
        <div>
            <h1 style={{ color: '#677D6A'}}>
                Welcome to Tommy's World
            </h1>
            <StyledButton>Submit</StyledButton>
        </div>
    )
}

export default Welcome