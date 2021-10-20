const tabauadaController = require('./tabuada')
const sinon = require('sinon')

describe('tabuada controller', () => {
  it('list', () => {
    const numeros = []
    for (let i = 1; i <= 100; i++) {
      numeros.push(i)
    }
    let res = {
      render: function () { }
    }
    let mock = sinon.mock(res)
    mock.expects('render').once().withArgs('tabuada/list', { numeros })
    tabauadaController.list({}, res)
  })
  it('calculates the tabuada', () => {
    const tabuadas = []
    const num = 10
    for (let i = 0; i <= 100; i++) {
      tabuadas.push({
        num,
        i,
        resultado: num * i
      })
    }
    let res = {
      render: function () { }
    }
    let mock = sinon.mock(res)
    mock.expects('render').once().withArgs('tabuada/tabuada', {
      num,
      tabuadas
    })
    tabauadaController.tabuada({ params: { num } }, res)
  })
})