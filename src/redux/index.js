import store from './store';
import action from './action';


store.dispatch(postLoaded());
store.dispatch('COMMENTS_LOADED');