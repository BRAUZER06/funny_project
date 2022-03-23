import React from 'react';

const Scrollable = (props) => {


  const [state, setState]=React.useState({
    isScrolling:false,
    clientX: 0,
    scrollX:0
  })
let ref = React.useRef()
  React.useEffect(()=>{
    const el = ref.current
    if(el) {
      const onWheel = e =>{
        e.preventDefault()
        el.scrollTo({
          left: el.scrollLeft + e.deltaY * 4,
          behavior: 'smooth'
        })
      }
      el.addEventListener('wheel', onWheel)

      return()=> el.addEventListener('wheel', onWheel)
    }
  },[])


  const onMouseMove = e =>{
    if(ref && ref.current && !ref.current.contains(e.target)){
      return
    }
    e.preventDefault()
    const {clientX, scrollX, isScrolling} = state
    if(isScrolling){
      ref.current.scrllLeft = scrollX + e.clientX - clientX
      let sX = scrollX + e.clientX - clientX
      let cX = e.clientX
      setState({
        ...state, scrollX: sX,
        clientX: cX
      })
    }

  }
  const onMouseUp = e =>{
    if(ref && ref.current && !ref.current.contains(e.target)){
      return
    }
    e.preventDefault()
    setState({...state, isScrolling:false})

  }
  const onMouseDown = e =>{
    if(ref && ref.current && !ref.current.contains(e.target)){
      return
    }
    e.preventDefault()
    setState({...state, isScrolling:true,
    clientX: e.clientX})
  }

  React.useEffect(()=>{
    document.addEventListener('mousedown', onMouseDown)
    document.addEventListener('mouseup', onMouseUp)
    document.addEventListener('mousemove', onMouseMove)

    return ()=>{
      document.removeEventListener('mousedown', onMouseDown)
      document.removeEventListener('mouseup', onMouseUp)
      document.removeEventListener('mousemove', onMouseMove)
    }
  })

  return (
    <div
     ref={ref}
      className={props._class}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}>
        
      {props.children}
    </div>
  );
};

export default Scrollable;