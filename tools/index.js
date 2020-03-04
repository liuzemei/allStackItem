const fs = require('fs')


class Tools {
  constructor() { }
  getCurrentGitHEAD() {
    const data = fs.readFileSync(path.join(__dirname, '..', '.git', 'logs', 'HEAD'), 'utf8')
    let tmp = data.substr(0, data.lastIndexOf('Neo') - 1)
    let build = tmp.substring(tmp.lastIndexOf(' ') + 1)
    return build + '-node-' + process.version
  }
  _getUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
      const r = (Math.random() * 16) | 0;
      const v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }
}


module.exports = new Tools()