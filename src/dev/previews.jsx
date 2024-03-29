import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import {Footer} from "../components";

const ComponentPreviews = () => {
  return (
      <Previews palette={<PaletteTree/>}>
        <ComponentPreview path="/Footer">
          <Footer/>
        </ComponentPreview>
      </Previews>
  )
}

export default ComponentPreviews