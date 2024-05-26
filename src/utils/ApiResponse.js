class ApiResponse {
  constructor(status, data, message = "success") {
    this.statusCode = status;
    this.data = data;
    this.message = message;
    this.status = this.statusCode < 400;
  }
}
