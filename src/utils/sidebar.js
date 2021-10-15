import Buyurtmalar from "../page/Buyurtmalar";
import Mahsulotlar from "../components/Mahsulotlar";
import Kategoriya from "../page/Kategoriya";
import Filiallar from "../page/Filiallar";
import Mijozlar from "../page/Mijozlar";
import Katalog from "../page/Katalog";
import { ReactComponent as buyurtmalar } from "../assets/icon/buyurtmalar.svg";
import { ReactComponent as maxsulotlar } from "../assets/icon/maxsulolar.svg";
import { ReactComponent as kategoriya } from "../assets/icon/kategoriya.svg";
import { ReactComponent as filiallar } from "../assets/icon/filiallar.svg";
import { ReactComponent as mijozlar } from "../assets/icon/mijozlar.svg";
import { ReactComponent as xisobot } from "../assets/icon/xisobot.svg";
import { ReactComponent as hodimlar } from "../assets/icon/katalog.svg";
import { ReactComponent as katalog } from "../assets/icon/katalog.svg";
import Xisobotlar from "../components/Hisobotlar";
import { Manzil } from "../page/Manzil";
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
    Component: Filiallar,
    Icon: filiallar,
    hiddeh: false,
  },
  {
    id: 5,
    path: "/mijozlar",
    titile: "mijozlar",
    Component: Mijozlar,
    Icon: mijozlar,
    hiddeh: false,
  },
  {
    id: 6,
    path: "/xisobot",
    titile: "xisobot",
    Component: Xisobotlar,
    Icon: xisobot,
    hiddeh: false,
  },
  {
    id: 7,
    path: "/diler",
    titile: "Dialer",
    Component: Manzil,
    Icon: hodimlar,
    hiddeh: false,
  },
  {
    id: 8,
    path: "/katalog",
    titile: "katalog",
    Component: Katalog,
    Icon: katalog,
    hiddeh: false,
  },
];
