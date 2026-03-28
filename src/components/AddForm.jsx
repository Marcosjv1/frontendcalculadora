import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

const AddForm = () => {

    const [descripcion, setDescripcion] = useState("")
    const [importe, setImporte] = useState(0)

    const {addGasto, error} = useContext(GlobalContext)

    const onSubmit = (e) => {
        e.preventDefault()

        const nuevoGasto = {
            descripcion,
            importe: +importe
        }

        addGasto(nuevoGasto)

        setDescripcion("")
        setImporte(0)

    }

    return(
        <>
            <h3>Agregar Gasto</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="descripcion">Descripcion</label>
                    <input 
                        type='text'
                        id='descripcion'
                        value={descripcion}
                        placeholder='por favor teclea la descripcion de tu gasto'
                        onChange={(e)=>setDescripcion(e.target.value)}
                    />
                </div>
                <div className='form-control'>  
                    <label htmlFor='importe'>importe</label>
                    <input 
                        type='number'
                        id='importe'
                        value={importe}
                        placeholder='por favor teclea el importe'
                        onChange={(e)=>setImporte(e.target.value)}
                    />
                </div>
                <button type='submit' className='btn'>Agregar Gastos</button>
            </form>
            {error ? <p>{error}</p> : null}
        </>
    )
}

export default AddForm