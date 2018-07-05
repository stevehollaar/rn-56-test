export default {
  PROCESS_JSON_ERROR_MSG: 'processJson failed',

  processJson(text: string) {
    let json = {};
    let returnText;
    try {
      json = JSON.parse(text);
    } catch (e) {
      returnText = this.PROCESS_JSON_ERROR_MSG;
    }
    returnText =
      json && json.formatString ? json.formatString : this.PROCESS_JSON_ERROR_MSG;
    if (json && json.parameters && json.parameters.length) {
      for (let i = 0; i < json.parameters.length; i++) {
        const token = `{${i}}`;
        returnText = returnText.replace(token, `${json.parameters[i]}`);
      }
    }
    return returnText;
  }
};
