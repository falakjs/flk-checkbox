const Component = require(COMPONENT_CLASS_PATH);

class FlkCheckboxComponent extends Component {}

module.exports = {
    selector: 'flk-checkbox',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: FlkCheckboxComponent,
    isUnique: false,
    component: 'FlkCheckbox',
    htmlFile: __dirname + '/../../flk-checkbox.component.html',
};