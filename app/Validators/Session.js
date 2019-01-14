'use strict'

class Session {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      email: 'required|emial',
      password: 'requered'
    }
  }
}

module.exports = Session
