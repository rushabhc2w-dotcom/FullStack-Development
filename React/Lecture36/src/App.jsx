import styled from "styled-components"
import UserProfile from './UserProfile'
 function App(){

  const Heading = styled.h1`
    color:red;
      border:1px solid green;
      borderRadius:5px;
      margin:20px;
      padding:20px;
  `
  // const Heading = styled.h1({
  //     color:'red',
  //     border:'1px solid green',
  //     borderRadius:'5px',
  //     margin:'20px',
  //     padding:'20px'
  //   })

  const StyleBtn = styled.button`
  color:red;
  width:130px;
  height:40px;
  margin:20px;
  
  `
  return (
  //  <>
  //   <h1 className="heading">External Style</h1>
  //   <div className="container">
  //     <div className="user-card">
  //       <div>
  //         <img src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/d95c1f148207527.62d1246c25004.jpg" alt="" className="img-style" />
  //       </div>
  //       <div className="text-wrap">
  //         <h4>Rushabh Pawar</h4>
  //         <p>Software Developer</p>
  //       </div>
  //     </div>
  //     <div className="user-card">
  //       <div>
  //         <img src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/d95c1f148207527.62d1246c25004.jpg" alt="" className="img-style" />
  //       </div>
  //       <div className="text-wrap">
  //         <h4>Rushabh Pawar</h4>
  //         <p>Software Developer</p>
  //       </div>
  //     </div>
  //     <div className="user-card">
  //       <div>
  //         <img src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/d95c1f148207527.62d1246c25004.jpg" alt="" className="img-style" />
  //       </div>
  //       <div className="text-wrap">
  //         <h4>Rushabh Pawar</h4>
  //         <p>Software Developer</p>
  //       </div>
  //     </div>
  //     <div className="user-card">
  //       <div>
  //         <img src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/d95c1f148207527.62d1246c25004.jpg" alt="" className="img-style" />
  //       </div>
  //       <div className="text-wrap">
  //         <h4>Rushabh Pawar</h4>
  //         <p>Software Developer</p>
  //       </div>
  //     </div>
  //     <div className="user-card">
  //       <div>
  //         <img src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/d95c1f148207527.62d1246c25004.jpg" alt="" className="img-style" />
  //       </div>
  //       <div className="text-wrap">
  //         <h4>Rushabh Pawar</h4>
  //         <p>Software Developer</p>
  //       </div>
  //     </div>
  //     <div className="user-card">
  //       <div>
  //         <img src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/d95c1f148207527.62d1246c25004.jpg" alt="" className="img-style" />
  //       </div>
  //       <div className="text-wrap">
  //         <h4>Rushabh Pawar</h4>
  //         <p>Software Developer</p>
  //       </div>
  //     </div>
  //     <div className="user-card">
  //       <div>
  //         <img src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/d95c1f148207527.62d1246c25004.jpg" alt="" className="img-style" />
  //       </div>
  //       <div className="text-wrap">
  //         <h4>Rushabh Pawar</h4>
  //         <p>Software Developer</p>
  //       </div>
  //     </div>
  //     <div className="user-card">
  //       <div>
  //         <img src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/d95c1f148207527.62d1246c25004.jpg" alt="" className="img-style" />
  //       </div>
  //       <div className="text-wrap">
  //         <h4>Rushabh Pawar</h4>
  //         <p>Software Developer</p>
  //       </div>
  //     </div>
  //     <div className="user-card">
  //       <div>
  //         <img src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/d95c1f148207527.62d1246c25004.jpg" alt="" className="img-style" />
  //       </div>
  //       <div className="text-wrap">
  //         <h4>Rushabh Pawar</h4>
  //         <p>Software Developer</p>
  //       </div>
  //     </div>
  //     <div className="user-card">
  //       <div>
  //         <img src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/d95c1f148207527.62d1246c25004.jpg" alt="" className="img-style" />
  //       </div>
  //       <div className="text-wrap">
  //         <h4>Rushabh Pawar</h4>
  //         <p>Software Developer</p>
  //       </div>
  //     </div>
  //     <div className="user-card">
  //       <div>
  //         <img src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/d95c1f148207527.62d1246c25004.jpg" alt="" className="img-style" />
  //       </div>
  //       <div className="text-wrap">
  //         <h4>Rushabh Pawar</h4>
  //         <p>Software Developer</p>
  //       </div>
  //     </div>
  //   </div>
  //  </>
  // <div style={{display:'flex',flexWrap:'wrap'}}>
  //   <UserProfile/>
  //   <UserProfile/>
  //   <UserProfile/>
  //   <UserProfile/>
  //   <UserProfile/>
  //   <UserProfile/>
  //   <UserProfile/>
  //   <UserProfile/>
  //   <UserProfile/>
  //   <UserProfile/>
  //   <UserProfile/>
  //   <UserProfile/>
  //   <UserProfile/>
  //   <UserProfile/>
  // </div>


    // Lecture38
    <>
    <h1>Styles Component with react Js</h1>
    <Heading>
      Hello Headding
    </Heading>
    <Heading>
      Hello Headding
    </Heading>
    <Heading>
      Hello Headding
    </Heading>
    <Heading>
      Hello Headding
    </Heading>
    

    <StyleBtn>Login</StyleBtn>
    <StyleBtn>Signup</StyleBtn>
    <StyleBtn>Back</StyleBtn>
    <StyleBtn>Forward</StyleBtn>

    </>
    
  )
 }
 export default App