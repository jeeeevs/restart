const getFromEnv = (name, defaultVal) =>{
    return process.env[name] || defaultVal;
}
const getConfigFile=(env)=>{
    return require('../config/'+env+'.json')
}

const getEnv=()=>{
    return getFromEnv('NODE_ENV','develop');
}
export const getFromConfig= (name, env)=>{
    const config = getConfigFile(env);
    return config[name] || null;
}

export const getPort=()=>{
    const name='PORT';
    const env = getEnv();
    return getFromConfig(name, env) || getFromEnv(name, 3001)
}