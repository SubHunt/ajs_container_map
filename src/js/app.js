export default class ErrorRepository {
  constructor() {
    this.mapError = new Map();
  }

  translate(code) {
    if (this.mapError.has(code)) {
      return this.mapError.get(code);
    }
    return 'Unknown error';
  }
}