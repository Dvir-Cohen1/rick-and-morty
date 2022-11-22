import styled from "@emotion/styled";

export const Container = styled.div(props => ({
     display: 'flex',
     flexDirection: props.column && 'column'
}))