import './style.scss'
import handleLoading from './js/loading'

const loadingView = document.querySelector('#loading')
const mainView = document.querySelector('main')

mainView.style.display = 'none'

handleLoading(state => {
  console.log(state)
  loadingView.querySelector('.progress').innerHTML = `${Math.floor(state * 100)}%`
}, success => {
  console.log(success ? 'All has been loaded successfully!' : 'Some images were not loaded...')
  loadingView.style.display = 'none'
  mainView.style.display = 'inherit'
})
