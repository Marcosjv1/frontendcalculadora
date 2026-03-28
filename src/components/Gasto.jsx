import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const Gasto = ({gasto}) => {

    const{ deleteGasto } = useContext(GlobalContext)
    const signo = gasto.importe<0 ? '-' : '+'
  const gastoId = gasto._id ?? gasto.id

  return (
    <li className={gasto.importe < 0 ? 'minus' : 'plus'}>
        {gasto.descripcion} <span>{signo}${Math.abs(gasto.importe)}</span>
        <button className='delete-btn' onClick={()=>deleteGasto(gastoId)}>x</button>
    </li>
  )
}

export default Gasto