import Generic from "../page/Generic";
import Buyurtmalar from "../page/Buyurtmalar";
import Mahsulotlar from "../components/Mahsulotlar";
import Kategoriya from "../components/Kategoriya";
import { ReactComponent as buyurtmalar } from "../assets/icon/buyurtmalar.svg";
import { ReactComponent as maxsulotlar } from "../assets/icon/maxsulolar.svg";
import { ReactComponent as kategoriya } from "../assets/icon/kategoriya.svg";
import { ReactComponent as filiallar } from "../assets/icon/filiallar.svg";
import { ReactComponent as mijozlar } from "../assets/icon/mijozlar.svg";
import { ReactComponent as xisobot } from "../assets/icon/xisobot.svg";
import { ReactComponent as hodimlar } from "../assets/icon/katalog.svg";
import { ReactComponent as katalog } from "../assets/icon/katalog.svg";

export const sidebar = [
  {
    id: 1,
    path: "/",
    titile: "Buyurtmalar",
    Component: Buyurtmalar,
    Icon: buyurtmalar,
    hiddeh: false,
  },
  {
    id: 2,
    path: "/maxsulotlar",
    titile: "Maxsulotlar",
    Component: Mahsulotlar,
    Icon: maxsulotlar,
    hiddeh: false,
  },
  {
    id: 3,
    path: "/kategoriya",
    titile: "kategoriya",
    Component: Kategoriya,
    Icon: kategoriya,
    hiddeh: false,
  },
  {
    id: 4,
    path: "/filiallar",
    titile: "filiallar",
    Component: Generic,
    Icon: filiallar,
    hiddeh: false,
  },
  {
    id: 5,
    path: "/mijozlar",
    titile: "mijozlar",
    Component: Generic,
    Icon: mijozlar,
    hiddeh: false,
  },
  {
    id: 6,
    path: "/xisobot",
    titile: "xisobot",
    Component: Generic,
    Icon: xisobot,
    hiddeh: false,
  },
  {
    id: 7,
    path: "/hodimlar",
    titile: "hodimlar",
    Component: Generic,
    Icon: hodimlar,
    hiddeh: false,
  },
  {
    id: 8,
    path: "/katalog",
    titile: "katalog",
    Component: Generic,
    Icon: katalog,
    hiddeh: false,
  },
];
