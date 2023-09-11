import React from 'react'
import styled from '@emotion/styled'

const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: blue;
    color: white;
    height: 80px;
    width: 100%;
`

const Logo = styled.div``

const Header :React.FC= () => {
  return (
    <div>
        <Container>
            <Logo>
                <h2>KODE10X</h2>
            </Logo>
        </Container>
      
    </div>
  )
}

export default Header
