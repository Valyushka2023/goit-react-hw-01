import css from "..//FriendList/FriendList.module.css";


export default function FriendListItem  ({ avatar, name, isOnline })  {
  const statusClass = isOnline ? css.online : css.offline;

  return (
    <div className={css.friendItem}>
      <img src={avatar} alt="Avatar" width="48" className={css.avatar} />
      <p className={css.friendName}>{name}</p>
      <p className={`friend-status ${statusClass}`}>{isOnline ? 'Online' : 'Offline'}</p>
    </div>
  );
}







