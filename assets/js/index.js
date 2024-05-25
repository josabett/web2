const datosEconomicos = document.querySelector('#datos-economicos')

const getData = async (url) => {
  const response = await fetch(url)
  const data = await response.json()
  datosEconomicos.innerHTML = `
    <li>Dolar: ${data.dolar.valor.toLocaleString('es-ES')} pesos</li>
    <li>UF: ${data.uf.valor.toLocaleString('es-ES')} pesos</li>
  `
}

getData('https://mindicador.cl/api')
