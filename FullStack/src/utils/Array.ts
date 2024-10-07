const array = ['João', 'Douglas', 'Wallace', 'Márcio', 'Gabriel', 'Felipe']
  array.push('Roberto')
  array.push('Renan')
  const test = array.slice(1, -2)
  console.log(test)

  const removidos = array.slice(1, 3)
  console.log('removidos', removidos)
  console.log('arrayEditado', array)
  const numeros = [10, 12, 8, 56, 100, 11, 1, 5, 17, 23, 4, 90, 81, 5]
  const maiorQue10 = numeros.filter(
    function(number) {
      if(number > 10) {
        return number
      }
    }
  )
  console.log(maiorQue10)