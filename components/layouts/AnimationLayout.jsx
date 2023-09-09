import { Stage } from '@pixi/react'

const AnimationLayout = ({children, width, height, backgroundColor}) => {
  return (
    <div className="rounded-lg overflow-hidden">
      <Stage width={width || 500} height={height || 500} options={{ backgroundColor: backgroundColor || "black"}}>
      {children}
      </Stage>
    
    </div>
  )
}

export default AnimationLayout
