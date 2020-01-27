import GridCol from './components/Col'
import GridRow from './components/Row'
import GridBlock from './components/Block'
import GridTouch from './components/Touch'
import GridText from './components/Text'
import GridCircle from './components/Circle'
import GridAnimation from './components/Animation'
import GridStyle from './utils/Style'
import GridScroll from './components/Scroll'

namespace Grid {
  export import Col = GridCol
  export import Row = GridRow
  export import Block = GridBlock
  export import Touch = GridTouch
  export import Text = GridText
  export import Circle = GridCircle
  export import Animation = GridAnimation
  export import Style = GridStyle
  export import Scroll = GridScroll
}

export import Col = Grid.Col
export import Row = Grid.Row
export import Block = Grid.Block
export import Touch = Grid.Touch
export import Text = Grid.Text
export import Circle = Grid.Circle
export import Animation = Grid.Animation
export import Style = Grid.Style
export import Scroll = Grid.Scroll

export default Grid
