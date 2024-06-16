import Profile from "../Profile/Profile";
import userData from "../../userData.json";
import friends from "..//..//friends.json";
import FriendList from "..//../components/FriendList/FriendList";
import TransactionHistory from "..//../components/TransactionHistory/TransactionHistory";

import transactions from "..//..//transactions.json";



export default function App() {
  return (
    <div>
      <Profile {...userData} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
}
