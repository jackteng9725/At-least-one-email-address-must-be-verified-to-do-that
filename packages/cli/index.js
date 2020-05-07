import { log } from '@mo-demo/cli-shared-utils';

if (process.env.LOCAL_DEBUG) {
  require('./src/index')                        
  // 如果是调试模式，加载src中的源码
} else {
//   require('./dist/index')                       
  // dist会发到npm
}
 
log('cli/index.js as cli entry exec!')