class ApiResponse{
    constructor(statusCode, datas , message = "Sucees"){

        
        this.statusCode = statusCode
        this.data = data
        this.message = message
        this.success = statusCode < 400
    }
}