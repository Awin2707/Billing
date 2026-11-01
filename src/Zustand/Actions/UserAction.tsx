export const TestingEnv =  (): boolean => {
    const url = window.location.href;
    if(url.includes('localhost') || url.includes('127.0.0.1')){
        return false;
    }else{
        return true;
    }
}