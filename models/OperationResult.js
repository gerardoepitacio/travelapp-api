module.exports = class OperationResult {
  constructor(status, errors) {
    this.status = status;
    this.errors = errors;
  }
}
