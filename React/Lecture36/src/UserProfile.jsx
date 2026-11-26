import style from './CSS/UserProfile.module.css'
function UserProfile() {
  return (
    <div>
        <h1 className={style.heading}>User Profile</h1>
      <div className={style.card}>
        <img className={style.img}
          src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/d95c1f148207527.62d1246c25004.jpg"
          alt=""
        />
      </div>
      <div className={style.textWrap}>
        <h4>Rushabh Pawar</h4>
        <p>Software Developer</p>
      </div>
    </div>
  );
}


export default UserProfile