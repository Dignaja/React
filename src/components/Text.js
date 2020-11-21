//step 1 : import
import React from 'react';
import styled from 'styled-components'

//step 2 : create a function (component)

const Text = (props) => {
    const StyledWrapper = styled.div`
    color:red;
    `
    return (
        <StyledWrapper>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </StyledWrapper>
        
    )

}
// step 3 : export
export default Text;