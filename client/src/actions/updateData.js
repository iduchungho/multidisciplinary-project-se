import dispatcher from "../dispatcher/dispatcher"


export function updateTemper(data)
{
    dispatcher.dispatch({ 
        type: 'UPDATE_TEMPER',
        payload: { value: data },
    })
}
export function updateHumi(data)
{
    dispatcher.dispatch({ 
        type: 'UPDATE_HUMI',
        payload: { value: data },
    })
}
export function updateLight(data)
{
    dispatcher.dispatch({ 
        type: 'UPDATE_LIGHT',
        payload: { value: data },
    })
}