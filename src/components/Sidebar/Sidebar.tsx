import styles from './Sidebar.module.scss';
import samanthaImg from '../../assets/png/samantha.png'
import { NavLink } from 'react-router-dom';

const links = [
  {
    className: styles.sidebarNavLink,
    activeClassName: styles.sidebarNavLinkActive,
    to: '/dashboard',
    name: 'Dashboard'
},
{
  className: styles.sidebarNavLink,
  activeClassName: styles.sidebarNavLinkActive,
    to: '/expenses',
    name: 'Expenses'
},
{
  className: styles.sidebarNavLink,
  activeClassName: styles.sidebarNavLinkActive,
    to: '/wallets',
    name: 'Wallets'
},
{
  className: styles.sidebarNavLink,
  activeClassName: styles.sidebarNavLinkActive,
  to: '/summary',
  name: 'Summary'
},
{
className: styles.sidebarNavLink,
activeClassName: styles.sidebarNavLinkActive,
  to: '/accounts',
  name: 'Accounts'
},
{
className: styles.sidebarNavLink,
activeClassName: styles.sidebarNavLinkActive,
  to: '/settings',
  name: 'Settings'
}
]

export default function Sidebar() {

  return(
  <>
    <aside className={styles.sidebar}>
      <div className={styles.sidebarContent}>
        <div className={styles.profileDetails}>
          <div className={styles.profileImageContainer}>
            <img src={samanthaImg} alt="samantha" />
            <p className={styles.notifications}>4</p>
          </div>
          <p className={styles.username}>Samantha</p>
          <p className={styles.userEmail}>samantha@email.com</p>
      </div>

        <nav className={styles.sidebarNav}>
          <ul>
            {links.map(link => (
            <li className={styles.sidebarNavItem} key={link.name}>
            <NavLink className={link.className} activeClassName={link.activeClassName} to={link.to}>{link.name}</NavLink></li>))}
          </ul>
        </nav>
      </div>
    </aside>
  </>
)
}