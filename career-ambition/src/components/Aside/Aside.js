import './aside.scss'
import { Icon } from '@iconify/react';

const Aside = () => {
    return(
        <div>
                <aside className="aside">
                    <div className="carbon">
                    <Icon icon="carbon:user-avatar" className="avatar" />
                    <Icon icon="ic:outline-dashboard-customize" />
                    <Icon icon="bx:bxs-calendar" />
                    <Icon icon="fe:logout" />
                    </div>
                </aside>
        </div>
    )
}

export default Aside;
