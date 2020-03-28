import * as sapper from '@sapper/app';
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
import * as Petch from 'petch'
import 'ol/ol.css'

window.petch = new Petch({
  origin: 'http://localhost:8000/api',
  options: {
    mode: 'cors'
  }
})

sapper.start({
	target: document.querySelector('#sapper')
});
