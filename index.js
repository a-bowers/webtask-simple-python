const os = require('os');
const path = require('path');
const fs = require('fs-extra');
const uuid = require('uuid').v4;
const pythonShell = require('python-shell');

const scriptName = "script.py";

module.exports.compile = (options, cb) => {
    const pyDir = path.join(os.tmpdir(), uuid());

    fs.ensureDir(pyDir);
    fs.writeFile(path.join(pyDir, scriptName), options.script);

    return cb(null, (context, cb) => {
        const pythonShell = require('python-shell');

        var pyOptions = {
            scriptPath: pyDir,
            pythonOptions: ["-W ignore"],
            args: context.query.args
        };

        var py = pythonShell.run(scriptName, pyOptions, (err, results) => {
            if(err) return cb("Python error: " + err, null);
            cb(null, results);
        });
        py.on('message', (message) => { console.log(message) });
    });
}