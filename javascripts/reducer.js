export var resumeApp = function (state, action) {
  if (typeof state === 'undefined') {
    return {
      current_section: "empty"
    }
  }
  return state;
}
