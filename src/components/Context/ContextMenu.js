import React from 'react'
import { Link } from 'react-router-dom'


const ContextMenu = ({ x, y, showMenu, isPath }) => {
   const style = () => {
      return {
         height: 20,
         width: 200,
         borderRadius: 10,
         backgroundColor: 'white',
         border: '2px solid grey',
         display: 'flex',
         flexDirection: 'column',
         padding: 10,
         top: y,
         left: x,
         position: 'absolute ',
         display: showMenu ? 'flex' : 'none',
      }
   }
   return (
      <div style={style()} >
         <Link target="blank" to={isPath} > <div style={styles.div}> Открыть в новой вкладке</div></Link>

      </div>
   )
}

const styles = {
   div: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#black',
      color: '#black',
      fontWeight: 'bold',
      cursor: 'pointer'
   }
}

export default ContextMenu