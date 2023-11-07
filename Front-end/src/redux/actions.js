import axios from 'axios';
import { GET_ALL_CLIENTES, GET_ALL_MEDICOS, GET_CITA_ID, GET_ALL_CITAS, GET_CITAS_PER_CLIENT } from './action-types'
// ``````
export const allClientes = () => async (dispatch) => {
    const clientes = await axios.get(`http://localhost:3001/cliente`);
    dispatch({
      type: GET_ALL_CLIENTES,
      payload: clientes,
    });
}
export const allMedicos = () => async (dispatch) => {
    const medicos = await axios.get(`http://localhost:3001/medico`);
    dispatch({
      type: GET_ALL_MEDICOS,
      payload: medicos,
    });
}
export const allCitas = () => async (dispatch) => {
    const citas = await axios.get(`http://localhost:3001/cita`)
    dispatch({
        type: GET_ALL_CITAS,
        payload: citas
    })
}

export const citaPerId = (citaId) => async (dispatch) => {
    const { cita } = await axios.get(`/citas/${citaId}`);
    dispatch({
      type: GET_CITA_ID,
      payload: cita,
    });
}
export const citasPerCLiente = (clienteId) => async (dispatch) => {
  const { citas } = await axios.get(`http://localhost:3001/cita/cliente/${clienteId}`);
  dispatch({
    type: GET_CITAS_PER_CLIENT,
    payload: citas,
  });
}



