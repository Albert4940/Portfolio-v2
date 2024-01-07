export const ButtonStyle = ({primary,secondary,thirdy,fifth}) => (`
    border:none;

    cursor:pointer;
      display: flex;
    align-items: center;
    margin:auto;
    width:7.5em;
    padding: 1rem 2rem;
    border-radius: 2px;
    font-size: 2rem;
    color: ${secondary} ;
    a{
      color:${secondary};
    }
    background: ${fifth};
    transition: background 0.3s ease-out;
    &:hover{
        background: ${thirdy};
        svg {
            transform: translateY(2px);
          }
    }
    
    `
)
