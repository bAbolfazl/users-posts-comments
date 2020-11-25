import styled from 'styled-components'

export const UserSingleStyled = styled.button`
    background-color: whitesmoke;
    transition: .4s;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    .user-name {
        text-decoration: underline;
    }

    &:hover {
        .web {
            color: #007BFF !important;
        }
    } 
`