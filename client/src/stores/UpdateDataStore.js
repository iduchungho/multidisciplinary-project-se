import { ReduceStore } from 'flux/utils';

export class UpdateDataStore extends ReduceStore
{
    getInitialState(){
        return {
            value: 0
        }
    }
    reduce(state,action)
    {
        switch (action.type) {
            case 'UPDATE_TEMPER':
                return { value: action.payload.value };
            case 'UPDATE_HUMI':
                return { value: action.payload.value };
            case 'UPDATE_LIGHT':
                return { value: action.payload.value };
            default:
              return state;
          }
    }
}