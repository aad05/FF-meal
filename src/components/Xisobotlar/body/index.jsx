import Stats from '../Stats'
import Download from '../Download'

export const Body = ({active}) =>{
    return active ? <Stats />: <Download />
}
