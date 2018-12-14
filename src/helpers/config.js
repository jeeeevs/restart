const getFromEnv = (name, defaultVal) =>{
    return process.env[name] || defaultVal;
}
const getConfigFile=(env)=>{
    return require('../config/'+env+'.json')
}

const getEnv=()=>{
    return getFromEnv('NODE_ENV','develop');
}
export const getFromConfig= (name, config)=>{
    return config[name] || null;
}

const env = getEnv();
const config = getConfigFile(env);

export const getPort=()=>{
    const name='PORT';
    return getFromConfig(name, config) || getFromEnv(name, 3001)
}
export const getUserServiceBaseUrl=()=>{
    const name='SERVICE_USER_BASE_URL';
    return getFromConfig(name, config);
}