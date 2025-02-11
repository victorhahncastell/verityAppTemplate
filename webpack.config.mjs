import path from 'path';
import { frontendConfig } from 'verity/webpack.veritycommon.mjs'

var dirname = path.dirname(new URL(import.meta.url).pathname);

const dsConfig = frontendConfig(dirname);
export default dsConfig;
