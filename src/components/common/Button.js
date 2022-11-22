import styled from '@emotion/styled'

export const Button = styled.button`
background:var(--primary-color);
color:var(--white);
padding: 8px 12px;
font-size:var(--text-sm);
border-radius:0.5rem;
margin:0 0.5rem;
margin-left:auto;
${(props) => props.spacing ? "margin:10px;" : "margin-left:auto;"}
&:hover{
     background: var(--primary - color - hover);
}`

