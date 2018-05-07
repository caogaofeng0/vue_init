import {get, post} from './httpFetch';
export const getRent  = (obj)=> {
    let url = '/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wu=';
    return get(url,obj);
  }