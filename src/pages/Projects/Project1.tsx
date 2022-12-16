import CenterContents from 'components/contents/CenterContents';
import NavBar from 'components/nav/Navbar';
import CustomizedTable from 'components/tables/Table';
// import footer from '../images/footer.png';
// import backgroundImage from '../images/bg-image.png';

const Project1 = () => {
  return (
    <div>
      <img
        src={require('../../images/bg-image.png')}
        id="bg"
        alt=""
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: -1,
          minWidth: '100%',
          minHeight: '100%',
        }}
      />
      {/* <div style={{ padding: '.5rem 1rem' }}>
        <NavBar />
      </div> */}
      <div
        style={{
          padding: '2rem 5rem',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
          }}
        >
          <div style={{ marginBottom: '2rem' }}>
            <CenterContents />
          </div>
          <div>
            <CustomizedTable />
          </div>
        </div>
      </div>
      <div className="footer">
        <img src={require('../../images/footer.png')} alt="" style={{ width: '100%', height: '100%' }}></img>
      </div>
    </div>
  )
}

export default Project1;