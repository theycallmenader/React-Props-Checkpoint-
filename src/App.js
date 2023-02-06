import Profile from './Profile/profile';
import './App.css';


export default function App() {
  function handlename (Name) {
    alert('Hello '+ Name)
  }
  return (

    <>
      
      <Profile  
        fullName="Nader Sdiri"
        bio="A motivated and enthusiastic recent graduate with a degree in computer science. Possessing quite strong programming skills, along with excellent algorithm skills . 
        Keen to start a career in web development and eager to bring my passion and knowledge to the role. I am a quick learner, able to work well in a team, and have a strong work ethic. 
        I am looking for an opportunity to contribute to a dynamic and growing organization and to continue developing my skills." 
        profession="Future Full-Stack developer"
        handlename={handlename}
        imgText="Nader Sdiri future Full-Stack developer "
      >
        
        <img
        src={"./images/pic.jpg"} alt="brr" className='image' />
          </Profile>
      
    </>
  );
}
Profile.defaultProps = {
  fullName: 'Nad ',
  bio: '!FOUND',
  btnShow:true,
  
}



