import React from 'react'
import { Link } from 'react-router-dom'


const ContextMenu = ({ x, y, showMenu, isPath }) => {
   const style = () => {
      return {
         height: 30,
         width: 230,
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
         {isPath ? <div style={styles.div}><Link target="blank" to={isPath} >  Открыть в новой вкладке</Link></div> : <div style={styles.div}>Работает только с ссылками в левом меню</div>}


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
      cursor: 'pointer',
      fontSize: 14
   }
}

export default ContextMenu