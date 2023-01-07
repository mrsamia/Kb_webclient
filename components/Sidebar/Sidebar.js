import SidebarItem from "./SidebarItems"
import Styles from './sidebar.module.css';
import SidebarData from "./SidebarData";

export default function Sidebar(){
  // {[Styles.forceOverflow,"pt-5 h-screen fixed overflow-scroll  md:w-72 lg:w-72 left-0 "].join(' ')}
    return (
      <div   className={[Styles.scrollbarCustom," pt-5"].join(' ')} >
        {
            // eslint-disable-next-line react/jsx-key
            SidebarData.map((singleItem)=> <SidebarItem singleItem={singleItem} />)
        }  
      </div>
    )
}