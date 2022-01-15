import { BadgeProps as ChakraBadgeProps, Badge as ChakraBadge } from '@chakra-ui/react'
import React from 'react'

interface BadgeProps extends ChakraBadgeProps {
  type: 'dark' | 'light'
}

function Badge(props : BadgeProps) {
  const { type } = props;
  return (
    <ChakraBadge
      { ...props }
      fontSize={"14px"}
      textTransform={"capitalize"}
      py={1}
      px={4}
      bg={ type === "dark" ? "neutral.500" : "neutral.100"  }
      color={ type === "dark" ? "neutral.100" : "neutral.500"  }
    >
      {props.children}
    </ChakraBadge>
  )
}

export default Badge
