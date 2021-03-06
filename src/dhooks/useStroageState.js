import { useCallback, useState } from 'react';

/**
 * stroage 保存状态
 * @param {*} cookieKey 
 * @param {*} param1 
 */
export function useStroageState(cookieKey, {dafaultVal, expire}) {

    const storage = window.localStorage;

    const [state, setState] = useState(() => {
        return storage.getItem(cookieKey) || dafaultVal;
    }); 

    const updateState = useCallback(
        (newValue) => {
            setState(() => {
                newValue ? storage.setItem(cookieKey, newValue) : storage.removeItem(cookieKey);
                return newValue;
            });
        },
        [cookieKey, expire]
    );

    return [state, updateState];
}
