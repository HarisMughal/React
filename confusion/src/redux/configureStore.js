import {createStore,combineReducers} from 'redux';
import {Dishes} from './dishes';
import {Comments} from './comments';
import {Leaders} from './leaders';
import {Promotions} from './promotions';

export const ConfigureStore = ()=>{
    const store = createStore(
        combineReducers({
            dishes:Dishes,
            leaders:Leaders,
            promotion:Promotions,
            comments:Comments
        })
    );
    return store;
}