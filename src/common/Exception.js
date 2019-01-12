class Exception{
    constructor(status,message,element){
        this.status = status;
        this.message = message;
        this.element = element;
    }

    focus(){
        if(this.element){
            this.element.focus();
        }
    }
}

export default Exception