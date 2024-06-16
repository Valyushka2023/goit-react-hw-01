import css from "./FriendList.module.css";
import FriendListItem from "../FriendListItem/FriendListItem";


export default function FriendList({ friends }) {
  return (
    <div className={css.friends}>
    <ul className={css.FriendList}>
        {friends.map((friend) => (
        <li className={css.friendItem} key={friend.id}>
          <FriendListItem {...friend} />
        </li>
      ))}
      </ul>
    </div>
  );
}
