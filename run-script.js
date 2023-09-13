const { exec } = require('child_process')
const isWindows = process.platform === 'win32'

const scriptPath = './scripts/script.sh'
const args = process.argv.slice(2).join(' ')

if (isWindows) {
  // On Windows, use the "bash" command to run the script
  exec(`bash ${scriptPath} ${args}`)
} else {
  // On non-Windows platforms, execute the script directly
  exec(`bash ${scriptPath} ${args}`)
}
