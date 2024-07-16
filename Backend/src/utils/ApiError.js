class APiError extends Error{
    constructor(statuscode,message="something went wrong",errors=[],stack=""){
        super(message)
        this.statuscode=statuscode
        this.message=message
        this.errors=errors
        this.success=false
        if(stack)
        {
            this.stack=stack
        }
    }
}
export {APiError}