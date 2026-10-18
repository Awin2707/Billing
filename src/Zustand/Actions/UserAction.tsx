export const TestingEnv =  (): boolean => {
    let url = window.location.href;
    if(url.includes('localhost') || url.includes('127.0.0.1')){
        return true;
    }else{
        return false;
    }
}