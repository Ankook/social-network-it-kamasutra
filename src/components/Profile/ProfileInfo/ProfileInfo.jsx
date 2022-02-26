import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = ({profile, status, updateStatus}) => {
  
  if (!profile) {
    return <Preloader/>
  }

  return (
    <div className={s.userData}>
      <div className={s.avatarWrapper}>
    
        {profile.photos.large == null
          ? <img src="https://upload.wikimedia.org/wikipedia/en/1/1f/Agent_Smith_%28The_Matrix_series_character%29.jpg" alt="Аватар безымянного пользователя"></img>
          : <img src={profile.photos.large} alt="Аватар пользователя"></img>
        }
        <ProfileStatusWithHooks updateStatus={updateStatus} status={status}/>
      </div>
      <div className={s.userInformation}>
        <ul>
          <li className='fullName'>Полное имя: {profile.fullName}</li>
          <li className='id'>Id: {profile.userId}</li>
          <li className='aboutMe'>Обо мне: {profile.aboutMe}</li>
          <li className='facebook'>Фейсбук:  {profile.contacts.facebook}</li>
          <li className='github'>Гитхаб:  {profile.contacts.github}</li>
          <li className='website'>Вебсайт:  {profile.contacts.website}</li>
          <li className='vk'>ВК:  {profile.contacts.vk}</li>
          <li className='twitter'>Твиттер:  {profile.contacts.twitter}</li>
          <li className='instagram'>Инстаграм:  {profile.contacts.instagram}</li>
          <li className='lookingForAJob'>Ищет ли работу: {profile.lookingForAJob? 'Да' : 'Нет'}</li>
          <li className="lookingForAJobDescription">Описание:  {profile.lookingForAJobDescription}</li>
        </ul>
      </div>
    </div>
  )
  
}

export default ProfileInfo;