import { GET_ALL_CLIENTES, GET_ALL_MEDICOS, GET_CITA_ID, GET_ALL_CITAS, GET_CITAS_PER_CLIENT } from './action-types'


const InitialState = {
    allCitas: [],
    allClientes: [],
    allMedicos: [],
    citaPerId: {},
    citasPerCLient: []
}

const reducer = (state = InitialState, {type, payload}) => {
    
    switch (type) {

    case GET_ALL_CITAS :
            return{
                ...state,
                allCitas: payload.data
            }
    case GET_ALL_CLIENTES:
            return{
                ...state,
                allClientes: payload.data
            }  
    case GET_ALL_MEDICOS :
            return{
                ...state,
                allMedicos: payload.data
            }
    case GET_CITA_ID :
            return{
                ...state,
                citaPerId: payload
            }
    case GET_CITAS_PER_CLIENT :
            return{
                ...state,
                citasPerCLiente: payload.data
            }
            
            break;
    
    default:
            break;
    }

    }


export default reducer;

