const core = require("@actions/core");
const { exec } = require("child_process");

async function executeCommands(commands) {
  const command = commands.shift();
  if (!command) {
    return [];
  }
  const result = await new Promise((resolve, reject) => {
    console.log("Executing the following command: ", command);
    exec(command, function (error, stdout, stderr) {
      if (error) {
        reject(error);
        return;
      }
      console.log('Result:', stdout);
      resolve(stdout);
    })
  });
  const results = await executeCommands(commands);
  results.unshift(result);
  return results;
}

try {
  const path = core.getInput("path");
  const key = core.getInput("key");
  const prefix = core.getInput("prefix");

  console.log('>>>>', path, key, prefix);
  // const cacheFileName = `${key}.tar.gz`
  // const cacheDirectory = `/github/workflow/cache/${prefix}`;
  // const cacheFilePath = `${cacheDirectory}/${cacheFileName}`;
  // console.log('>>>>>', key, '<>', path);
  // executeCommands([
  //   `mkdir -p ${cacheDirectory}`,
  //   `[ ! -f "${cacheFilePath}" ] && exit 0`,
  //   `tar -xzf "${cacheFilePath}" -C "${cacheDirectory}"`,
  // ]).catch((error) => core.setFailed(error.message));
} catch (error) {
  core.setFailed(error.message);
}
