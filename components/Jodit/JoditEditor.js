import React, { useRef } from 'react'
import JoditEditor from 'jodit-react'

const Joditeditor = ({content,config,setValue}) => {
    const editor = useRef(null)
  return (
    <JoditEditor
    ref={editor}
    value={content}
    config={config}
    tabIndex={10} 
    onBlur={content => setValue(content)}
/>
  )
}

export default Joditeditor
