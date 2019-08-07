class FlkCheckbox {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor() {            
        this.defaultId = Random.id();
    }
    
    /**
     * Initialize the component
     * This method is triggered before rendering the component
     */
    init() {
        this.label = this.inputs.getOption('label');
        this.id = this.inputs.getOption('id', this.defaultId);
        this.theme = this.inputs.getOption('theme', Config.get('form.checkbox.theme', 'success'));
    }

    /**
     * The component is ready to do any action after being rendered in dom
     */
    ready() {}
}