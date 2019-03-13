import styled from 'styled-components'

export const CenterGrid = styled.div`
  width: ${props => props.width || '100%'};
  max-width: ${props => props.maxWidth || '1040px'};
  margin-left: auto;
  margin-right: auto;
`

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  flex-wrap:${props => props.wrap || 'nowrap'};
  justify-content: $justify${props => props.justifyContent || 'flex-start'};
  align-items: ${props => props.alignItems || 'stretch'};
  align-content: ${props => props.alignContent || 'stretch'};
`

export const FlexItems = styled.div`
  $basis: ${props => props.basis || 'auto'};
  $grow: ${props => props.grow || '0'};
  $shrink: ${props => props.shrink || '1'};
`