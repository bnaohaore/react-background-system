
import About from '@/view/About/About'
import Inbox from '@/view/Inbox/Inbox'
import Grxx1 from '@/view/Inbox/grxx/Grxx1'
import Grxx2 from '@/view/Inbox/grxx/Grxx2'
export default [
    { path: "/About", name: "About", component: About,exact:true},
    { path: "/Inbox", name: "Inbox", component: Inbox,
        children:[
            { path: "/Inbox/Grxx1", name: "Grxx1", component: Grxx1,exact:true },
            { path: "/Inbox/Grxx2", name: "Grxx2", component: Grxx2 },
        ]
    },
]