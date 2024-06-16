import css from "./Profile.module.css";

export default function Profile({ username, tag, location, avatar, stats }) {
  return (
    <div className={css.profile}>
      <div className={css.card}>
        <div className={css.image}>
          <img
            src={avatar}
            alt="User avatar"
            width="80"
            height="80"
            className={css.avatar}
          />
        </div>
        <p className={css.name}>{username}</p>
        <p className={css.teg}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>
      <div>
        <ul className={css.stats}>
          <li className={css.statItem}>
            <span className={css.statLabel}>Followers</span>
          <span className={css.statValue}>{stats.followers}</span>
          </li>
          <li className={css.statItem}>
            <span className={css.statLabel}>Views</span>
            <span className={css.statValue}>{stats.views}</span>
          </li>
          <li className={css.statItem}>
            <span className={css.statLabel}>Likes</span>
            <span className={css.statValue}>{stats.likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
