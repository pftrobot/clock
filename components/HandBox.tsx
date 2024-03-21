import React, { NamedExoticComponent } from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'

interface IHandBox {
  degree: number
  type: string
}
const HandBox: NamedExoticComponent<IHandBox> = React.memo(
  ({ degree, type }) => {
    return (
      <HandBoxCSS type={type} style={{ transform: `rotate(${degree}deg)` }}>
        <div className="hand"></div>
      </HandBoxCSS>
    )
  },
  (prevProps, nextProps) => {
    return prevProps.degree === nextProps.degree
  }
)
HandBox.displayName = 'HandBox'

export default HandBox

const dynamicStyle = ({ type }) => css`
  .hand {
    width: ${type === 'long' ? 1 : type === 'short' ? 5 : 3}px;
    height: ${type === 'long' ? '50%' : type === 'short' ? '35%' : '45%'};
  }
`

const HandBoxCSS = styled('div')`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  ${dynamicStyle};

  .hand {
    position: absolute;
    top: 50%;
    left: 50%;
    background-color: #ffb900;
    border-radius: 4px;
    transform: translate(-50%, -100%);
  }
`
