import PropTypes from 'prop-types'
import { useState, forwardRef, useImperativeHandle } from 'react'

//The function that creates the component is wrapped inside of a forwardRef function call. 
//This way the component can access the ref that is assigned to it.

const Togglable = forwardRef((props, refs) => {
  const [visible, setVisible] = useState(false)

  const hideWhenVisible = { display: visible ? 'none' : '' }
  const showWhenVisible = { display: visible ? '' : 'none' }

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  //uses the useImperativeHandle hook to make 
  //its toggleVisibility function available outside of the component
  useImperativeHandle(refs, () => {
    return {
      toggleVisibility
    }
  })
//the useImperativeHandle function is a React hook, that is used for defining functions in a component,
// which can be invoked from outside of the component.

  return (
    <div>
      <div style={hideWhenVisible}>
        <button onClick={toggleVisibility}>{props.buttonLabel}</button>
      </div>
      <div style={showWhenVisible}>
        {props.children}
        <button onClick={toggleVisibility}>cancel</button>
      </div>
    </div>
  )

})
Togglable.propTypes = {
  buttonLabel: PropTypes.string.isRequired
}

Togglable.displayName = 'Togglable'

export default Togglable

