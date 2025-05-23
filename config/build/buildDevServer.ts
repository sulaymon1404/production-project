import { BuildOptions } from "./types/config";
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';

export function buildDevServer ({isDev,port}:BuildOptions):DevServerConfiguration{
    return {
        port,
        open:true,
        historyApiFallback:true,
        hot:true
    }
}
