import React from "react"
import MuiButton from "@mui/material/Button"
import { styled } from "@mui/material"

interface ButtonProps {
  title: string
  variant: "outlined" | "contained" | "text"
  [key: string]: any
}

const StyledButton = styled(MuiButton)({
  color: "darkslategray",
  backgroundColor: "aliceblue",
  padding: 8,
  borderRadius: 4,
})

const Button = (props: ButtonProps) => {
  const { title, variant, ...rest } = props

  return (
    <StyledButton variant={variant} {...rest}>
      {title}
    </StyledButton>
  )
}

export default Button
