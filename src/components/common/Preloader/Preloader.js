import preloader from '../../../assets/pre-loaders/preloader.svg'

let Preloader = (props) => {
  return <div style={{ backgroundColor: 'white' } } >
      <img alt="Preloader" src={preloader} />
  </div>
}


export default Preloader;