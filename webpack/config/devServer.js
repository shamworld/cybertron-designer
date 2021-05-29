/**
 * Created by: Andrey Polyakov (andrey@polyakov.im)
 * @see https://webpack.js.org/configuration/dev-server/
 */
import {devServerProxyConfig} from './devServierProxy';

const defaultPort = 8080;
const devServerHost = 'localhost';

export const devServerUrl = `http://${devServerHost}:${defaultPort}/`;

export const devServerConfig = {
    publicPath: '/',
    port: defaultPort,
    historyApiFallback: true,
    headers: {'Access-Control-Allow-Origin': '*'},
    proxy: devServerProxyConfig,
    hot: true,
    overlay: false,
    host: devServerHost,
};
