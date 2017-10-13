var Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {

    constructor(args, opts) {
        super(args, opts);
    }

    createProject() {
        console.log(chalk.blue('Creating New Project'));
    }

    initializing() {
        console.log(yosay(
            'Welcome to the ' + chalk.red('NG Project Generator') + ' !'
        ));
    }

    writing() {
        this.fs.copyTpl(
            this.templatePath('_package.json'),
            this.destinationPath('package.json')
        );
    }

};