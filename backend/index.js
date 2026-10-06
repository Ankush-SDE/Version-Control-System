const yargs = require('yargs');
const {hideBin} = require("yargs/helpers");

const { initRepo } = require("./controllers/init");



yargs(hideBin(Process.argv)).command('init',"Initialise a new repository",{});
