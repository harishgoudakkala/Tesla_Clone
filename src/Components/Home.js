import React from 'react'
import styled from "styled-components"
import Section from './Section'

function Home() {
  return (
    <Container>
      <Section
        title = "Model S"
        description = "Order Online for Touchless Delivery"
        backgroundImg = "model-s.jpg"
        left = "Custom Order"
        right = "Existing Inventory"
      />
      <Section
        title = "Model 3"
        backgroundImg = "model-3.jpg"
        description = "Order Online for Touchless Delivery"
        left = "Custom Order"
        right = "Existing Inventory"
      />
      <Section
        title = "Model X"
        backgroundImg = "model-x.jpg"
        description = "Order Online for Touchless Delivery"
        left = "Custom Order"
        right = "Existing Inventory"
      />
      <Section
        title = "Model Y"
        backgroundImg = "model-y.jpg"
        description = "Order Online for Touchless Delivery"
        left = "Custom Order"
        right = "Existing Inventory"
      />
      <Section
        title = "Lowest Cost Solar Panels in America"
        backgroundImg = "solar-panel.jpg"
        description = "Money-back guarantee"
        left = "Order Now"
        right = "Learn more"
      />
      <Section
        title = "Solar For New Roofs"
        backgroundImg = "solar-roof.jpg"
        description = "Solar Roof Costs Less than a New Roof Plus Solar Panels"
        left = "Order Now"
        right = "Learn more"
      />
      <Section
        title = "Accessories"
        backgroundImg = "accessories.jpg"
        left = "Shop Now"
      />
    </Container>
  )
}

export default Home


const Container = styled.div`
    height : 100vh;
`